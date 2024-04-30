import { FC } from 'react'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInputProps> = ({ ...props }) => {
   return <input {...props} />
}

export default Input
