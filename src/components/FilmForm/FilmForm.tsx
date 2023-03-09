import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setName } from '@/store/services/filmSearchParams'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { ButtonSearch } from '../ui/Button'
import { Input } from '../ui/Input'

const FilmForm = () => {
  const { name } = useAppSelector((state) => state.filmSearchParams)
  const dispatch = useAppDispatch()
  const [value, setValue] = useState(name)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    dispatch(setName(value.trim()))
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => setValue(event.target.value)

  return (
    <form
      autoComplete='off'
      onSubmit={handleSubmit}
      className='form w-[100%] flex'
    >
      <Input
        value={value}
        setValue={handleChange}
      />
      <ButtonSearch>Search</ButtonSearch>
    </form>
  )
}

export default FilmForm
