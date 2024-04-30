import { FC } from 'react'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
   return <button {...props}>{children}</button>
}

export default Button
