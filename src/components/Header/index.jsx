import logo from 'assets/img/logoAnimeMinds.png'
import { Link, useLocation } from 'react-router-dom'
import { GiNotebook } from 'react-icons/gi'
import { BsInfoCircle } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

export default function Header() {
    const location = useLocation()

    if (location.key === 'default') {
        return null
    }

    return (
        <header className='bg-primary flex flex-col items-center text-letter_primary py-5'>
            <Link className='w-48 md:w-1/4 2xl:w-1/5 lg:w-1/3' to='/'><img src={logo} alt="Logo Anime Minds" /></Link>
            <nav className='sm:text-xl text-base font-semibold flex border-y-4 rounded-full border-double justify-center sm:px-14 px-5 leading-none py-3 gap-x-14 mt-7'>
                <Link className='flex gap-2' to="/">
                    <AiFillHome /><p className='max-md:hidden'>INÍCIO</p>
                </Link>
                <Link className='flex gap-2' to="/postagens">
                    <GiNotebook /><p className='max-md:hidden'>POSTAGENS</p>
                </Link>
                <Link className='flex gap-2' to="/sobrenos">
                    <BsInfoCircle /><p className='max-md:hidden'>SOBRE NÓS</p>
                </Link>
            </nav>
        </header>
    )
}