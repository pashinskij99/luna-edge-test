import { useAppSelector } from '@/store/hooks'
import { useGetFilmsByNameQuery } from '@/store/services/films'
import { getContent } from '@/utils/validateData'
import Error from '../ErrorComponent'
import FilmList from '../FilmList'
import PaginationComponent from '../Pagination'
import { Spinner } from '../ui/Spinner/Spinner'

const Films = () => {
  const filmSearchParams = useAppSelector((state) => state.filmSearchParams)
  const { data, isLoading } = useGetFilmsByNameQuery(filmSearchParams)

  return (
    <div>
      {
        getContent(
          isLoading, 
          data, 
          [
            <Spinner />, 
            <>
              <FilmList data={data?.Search!} />
              <PaginationComponent pageCount={+data?.totalResults! / 10} />
            </>,
            <Error errorMessage={data?.Error} />, 
          ]
        )
      }
    </div>
  )
}

export default Films
