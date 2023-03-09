import Error from '@/components/ErrorComponent'
import { ButtonFavorite } from '@/components/ui/Button'
import { useIsFavorite } from '@/hooks/useIsFavorite'
import { useAppDispatch } from '@/store/hooks'
import { setFilm } from '@/store/services/favorite'
import { useGetFilmByIdQuery } from '@/store/services/films'
import { IFilmFull } from '@/types/interfaces'
import { getContent } from '@/utils/validateData'
import { GetServerSidePropsContext } from 'next'
import { Spinner } from '@/components/ui/Spinner'

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { id } = context.query

  return {
    props: {
      id,
    },
  }
}

interface IFilmPage {
  id: string
}
const Film = ({ id }: IFilmPage) => {
  const { isLoading, data } = useGetFilmByIdQuery(id)

  return <div>
    {
      getContent(
        isLoading,
        data,
        [
          <Spinner />,
          <FilmInfo data={data!} />,
          <Error errorMessage={data?.Error} />,
        ]
      )
    }
  </div>
}

interface IFilmInfo {
  data: IFilmFull
}
const FilmInfo = ({ data }: IFilmInfo) => {
  const { Actors, Metascore, Plot, Poster, Ratings, Title, Type, Writer, Year, imdbID, imdbRating } = data

  const { isFavorite } = useIsFavorite(imdbID)

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setFilm({ Year, Type, Title, Poster, imdbID }))
  }

  return (
    <div className='container mx-auto p-5 grid grid-cols-1 sm:grid-cols-2'>
      <div>
        <div className='flex'>
          <h1 className='text-3xl'>{Title}</h1>
          <span className='ml-2'>({Year})</span>
        </div>
        <img
          src={Poster}
          alt={Title}
          className='mx-auto w-[auto] h-auto'
        />
      </div>

      <div className='text-sm md:text-lg flex-1 pl-5'>
        <div className='flex flex-col'>
          <span>
            <span className='font-medium'>Rating IMDB: </span>
            {imdbRating}
          </span>
          <ul className='flex flex-col'>
            {Ratings.map(({ Source, Value }) => (
              <li
                key={Source}
                className='flex w-[max-content]'
              >
                <span className='font-medium'>{Source}</span>:<span className='ml-2'>{Value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col'>
          <span className='capitalize font-medium inline-block'>{Type}</span>
          <span>
            <span className='font-medium'>Writter:</span> {Writer}
          </span>
          <span>
            <span className='font-medium'>Actors:</span> {Actors}
          </span>
        </div>

        <div className='flex flex-col items-center mt-3'>
          <ButtonFavorite onClick={handleClick} disabled={isFavorite}>Add to Favorite</ButtonFavorite>
          {isFavorite && <span className='ml-3'>This film was in you favorite</span>}
        </div>

        <hr className='mt-5' />

        <p className='mt-5 text-sm md:text-lg'>{Plot}</p>
      </div>
    </div>
  )
}

export default Film
