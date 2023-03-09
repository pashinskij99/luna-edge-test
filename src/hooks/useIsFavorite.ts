import { useAppSelector } from "@/store/hooks"
import { useEffect, useState } from "react"

export const useIsFavorite = (id: string) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const {films} = useAppSelector(state => state.favorite)

  useEffect(() => {
    const filterFilms = films.filter(film => film.imdbID === id)
    setIsFavorite(filterFilms.length ? true : false)
  }, [films])

  return {isFavorite}
}