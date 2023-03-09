import { IFilm } from "@/types/interfaces"
import FilmItem from "../FilmItem"

interface IList {
  data: IFilm[]
}

const FilmList = ({ data }: IList) => (
  <ul className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 py-5'>
    {data?.map((film) => (
      <FilmItem
        {...film}
        key={film.imdbID}
      />
    ))}
  </ul>
)
export default FilmList