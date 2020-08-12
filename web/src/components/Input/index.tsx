import React, { InputHTMLAttributes } from 'react'
import './styles.css'

/* 
A Interface InputHTMLAttributes carrega todas as propriedades que um input
HTML pode receber. Essa interface diz que o input tem que ser tipado e ele
é do tipo HTMLInputElement neste caso. É possivel portanto capturar o restante
das propriedades sem ter que nomea-las uma por uma via rest parameters e passar
para o Input dentro da estrutura, permitindo que todas as propriedades opcionais 
do Input sejam utilizadas.
*/
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default Input