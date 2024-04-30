import { FC } from 'react'
import './style.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
   return <button className='button' {...props}>{children}</button>
}

export default Button
