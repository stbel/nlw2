import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

interface TeacherItemProps {
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://scontent.fbfh4-1.fna.fbcdn.net/v/t31.0-8/10923712_1387504644884840_8698846649610228702_o.jpg?_nc_cat=103&_nc_sid=174925&_nc_eui2=AeFRvv4j2cPOyxRZPS2D2sKXn0Zpb22cYwyfRmlvbZxjDFcGOqcMzIg04LDc-Wg8MiHaGDkHXTVszB2b4GpWu7x2&_nc_ohc=f5DbHz_T0fkAX-DcNeM&_nc_ht=scontent.fbfh4-1.fna&oh=a241107cdfede77039365e94a2681d46&oe=5F5A078F" alt="profile" />
        <div>
          <strong>Nome da pessoa que ensina</strong>
          <span>Algum conhecimento fantástico</span>
        </div>
      </header>

      <p>
        Entusiasta de alguma coisa.
        <br /><br />
        Descrição mais alongada das qualificações do professor. Afficcionado por isso, apaixonado por aquilo etc...
      </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 100,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt="whatsapp" />
          Entre em contato.
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;