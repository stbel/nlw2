import { Request, Response } from 'express'
import db from '../database/connection'
import { convertStringHourToMinutes } from '../utils/UtilFunctions'

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {

  async index(request: Request, response: Response) {

    const filters = request.query

    const week_day = filters.week_day as string
    const subject = filters.subject as string
    const time = filters.time as string

    if (!subject || !week_day || !time) {
      return response.status(400).json({ message: "Missing filters to search the classes." })
    }

    const timeInMinutes = convertStringHourToMinutes(time)

    // Implementação de acordo com a aula, para Sqlite. Não testei a execução pois fiz no Postgresql.

    // const classes = await db('classes')
    //   .whereExists(function(){
    //     this.select('class_schedule.*')
    //       .from('class_schedule')
    //       .whereRaw('´class_schedule´.´class_id´ = ´classes´.´id´')
    //       .whereRaw('´class_schedule´.´week_day´ = ??', [Number(week_day)])
    //       .whereRaw('´class_schedule´.´from´ <= ??', [Number(timeInMinutes)])
    //       .whereRaw('´class_schedule´.´to´ > ??', [Number(timeInMinutes)])
    //   })
    //   .where('subject', '=', subject)
    //   .join('users', 'classes.user_id', '=', 'users.id')
    //   .select(['classes.*', 'users.*'])


    // Anotação de diferença em relação à aula:
    // As crases geraram erro no Postgresql. Pode ser um requisito do Sqlite.
    // Não foi necessário também passar os parâmetros dentro de array.
    const classes = await db('classes')
      .whereExists(function(){
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('class_schedule.class_id = classes.id')
          .whereRaw('class_schedule.week_day = ??', Number(week_day))
          .whereRaw('class_schedule.from <= ??', Number(timeInMinutes))
          .whereRaw('class_schedule.to > ??', Number(timeInMinutes))
      })
      .where('subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])


    return response.json(classes)
  }

  async create(request: Request, response: Response) {

    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body

    const trx = await db.transaction()
    try {
      const insertedUsersIds = await trx('users').insert({
        name, avatar, whatsapp, bio
      }).returning("id")

      const user_id = insertedUsersIds[0]

      const insertedClassesIds = await trx('classes').insert({
        subject, cost, user_id
      }).returning("id")

      const class_id = insertedClassesIds[0]

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertStringHourToMinutes(scheduleItem.from),
          to: convertStringHourToMinutes(scheduleItem.to),
          class_id,
        }
      })

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()
      return response.status(201).json({ message: 'Successfuly created' })

    } catch (error) {
      // console.log(error)

      await trx.rollback()
      return response.status(400).json({ error: 'Failed to create the data on server' })
    }
  }
}