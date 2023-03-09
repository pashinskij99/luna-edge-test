import { use, useEffect, useState } from "react"

interface IError {
  errorMessage?: string
}

const Error = ({ errorMessage }: IError) => {
  const [error, setError] = useState<string>('')

  useEffect(() => {
    switch(errorMessage){
      case 'Incorrect IMDb ID.':
        setError('Please, write the name of the movie')
        break
      case 'Too many results.': 
        setError('Too many results. Сould you name it more precisely?')
        break
      default: 
        setError('Something was wrong...')
        break
    }
  }, [errorMessage])

  return (
    <div className='text-center'>
      <h1 className='text-3xl'>
        {error}
      </h1>
    </div>
  )
}

export default Error
