import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

interface IInput {
  value: string
  setValue: ChangeEventHandler<HTMLInputElement>
  name?: string 
  type?: HTMLInputTypeAttribute
  placeholder?: string
}

const Input = ({ value, setValue, name = 'name', type = 'text', placeholder='Write name film...' }: IInput) => (
  <input
    value={value}
    name={name}
    onChange={setValue}
    type={type}
    placeholder={placeholder}
    className='border-2 p-1 md:p-3 w-[100%] border-cyan-600 border-solid flex-1 focus-visible:outline-none'
  />
)

export { Input }
