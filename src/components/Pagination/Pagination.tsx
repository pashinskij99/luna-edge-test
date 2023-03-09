import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setPageNumber } from '@/store/services/filmSearchParams'
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination'

interface IPagination {
  pageCount: number
}

const PaginationComponent = ({ pageCount }: IPagination) => {
  const dispatch = useAppDispatch()
  const {page} = useAppSelector(state => state.filmSearchParams)

  const handlePageClick = (event: any) => {
    dispatch(setPageNumber(event))
  }

  return (
    <Pagination
      className='flex items-center w-min mx-auto'
      pageItemClassName='mx-1 bg-cyan-600'
      pageLinkClassName='px-3 py-3'
      activeItemClassName='!bg-amber'
      disabledItemClassName='opacity-[0.5]'
      disabledLinkClassName=''
      {...bootstrap5PaginationPreset}
      current={page}
      total={Math.ceil(pageCount)}
      onPageChange={handlePageClick}
    />
  )
}

export default PaginationComponent
