import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

export interface Teacher {
  id: number;
  subject: string;
  cost: number;

  name: string
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="avatar" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ {teacher.cost}</strong>
        </p>
        <a href={`https://wa.me/55${teacher.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="whatsapp" />
          Entre em contato.
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;