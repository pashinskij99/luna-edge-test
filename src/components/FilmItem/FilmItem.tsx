import { PAGES_LINKS } from '@/types/enums'
import { IFilm } from '@/types/interfaces'
import Link from 'next/link'
import NotFoundImage from '@/assets/image/not-found.png'

const FilmItem = ({ Poster, Title, Type, Year, imdbID }: IFilm) => {
  return (
    <Link
      href={`${PAGES_LINKS.FILM}/${imdbID}`}
      className='flex flex-col transition-transform hover:scale-105'
    >
      <div className='flex flex-1'>
        <img
          src={Poster === 'N/A' ? NotFoundImage.src : Poster}
          alt={Title}
          className='w-[100%] h-[300px] object-contain'
        />
      </div>

      <div className='flex flex-col'>
        <h3 className=''>{Title}</h3>
        <div className='flex justify-between'>
          <span className='font-light'>{Type}</span>
          <span className='font-light'>{Year}</span>
        </div>
      </div>
    </Link>
  )
}

export default FilmItem
