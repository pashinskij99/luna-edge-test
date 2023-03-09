import FilmList from '@/components/FilmList'
import { useAppSelector } from '@/store/hooks'

const FavoritePage = () => {
  const { films } = useAppSelector((state) => state.favorite)

  return (
    <div className='container mx-auto px-5'>
      <h1 className='text-center text-3xl py-5'>Favorites</h1>
      {films.length ? <FilmList data={films} /> : <h1 className='text-3xl text-center'>Favorite list is empty</h1>}
    </div>
  )
}

export default FavoritePage
