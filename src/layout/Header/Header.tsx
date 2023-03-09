import { useAppSelector } from '@/store/hooks'
import { PAGES_LINKS } from '@/types/enums'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const Header = () => (
  <header className="sticky bg-cyan-600 lg:py-5 py-2">
    <div className="container mx-auto lg:px-5 px-2 flex justify-between">
      <Link href={PAGES_LINKS.HOME} className="flex items-center text-silver">
        <AcademicCapIcon className='w-[1.5rem]' />
        <span className="text-xl ml-2">NextJs App</span>
      </Link>

      <Favlorite />
    </div>
  </header>
)

const Favlorite = () => {
  const { films } = useAppSelector(state => state.favorite)
  return (
    <Link href={PAGES_LINKS.FAVORITE} className='relative' >
      <BriefcaseIcon className='w-[1.5rem] text-silver' />
      {
        films.length
          ? <span className='flex items-center justify-center absolute font-bold top-[-2px] right-[-2px] w-3 h-3 text-[10px] bg-amber rounded-full'>{films.length}</span>
          : null
      }
    </Link>
  )
}

export default Header
