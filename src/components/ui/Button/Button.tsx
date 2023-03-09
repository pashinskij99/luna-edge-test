import { MouseEventHandler, ReactNode } from 'react'

interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  disabled?: boolean
}

const ButtonSearch = ({ onClick = () => {}, children, disabled = false }: IButton) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className='bg-cyan-600 px-6 text-silver'
  >
    {children}
  </button>
)

const ButtonFavorite = ({ children, disabled = false, onClick = () => {} }: IButton) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className='px-10 py-3 bg-amber disabled:opacity-[.6]'
  >
    {children}
  </button>
)

export { ButtonSearch, ButtonFavorite }
