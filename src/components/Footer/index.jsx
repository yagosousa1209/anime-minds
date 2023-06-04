import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

export default function Footer(){
    const location = useLocation()

    if (location.key === 'default') {
        return null
    }


    return (
        <footer className="bg-background/95 flex flex-col items-center">
            <section className='flex text-primary gap-5 py-5 text-2xl'>
                <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><FaFacebookF  className='cursor-pointer' /></a>
                <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer"><FaInstagram  className='cursor-pointer' /></a>
                <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer"><FaTwitter  className='cursor-pointer' /></a>
                <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer"><FaYoutube  className='cursor-pointer' /></a> 
            </section>
            <span className='text-letter_primary text-sm text-center'>Anime minds é um site para fins de estudo feito por <b>Yago Sousa</b></span>
        </footer>
    )
}