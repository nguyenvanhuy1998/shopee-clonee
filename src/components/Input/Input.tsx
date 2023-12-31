import { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

export default function Input({
  register,
  rules,
  errorMessage,
  className,
  name,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  ...rest
}: InputProps) {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className={className}>
      <input {...registerResult} {...rest} className={classNameInput} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
