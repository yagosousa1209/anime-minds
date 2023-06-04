import { Link } from "react-router-dom";
import { TbFaceIdError } from 'react-icons/tb'

export default function Error() {
    return (
        <main className="bg-background text-letter_primary  flex justify-center">
            <div className='px-4 md:px-20 lg:px-[120px] xl:px-40 2xl:px-60 max-w-maxScreen 
            text-center text-xl h-screen flex flex-col items-center justify-center'>
                <h1 className="flex text-[100px] max-sm:text-[80px] font-bold items-center gap-5">404<TbFaceIdError /></h1>
                <h3>Página não encontrada</h3>
                <p>Deseja voltar para a <Link to={'/'} className="font-bold underline hover:text-primary">página inicial</Link>?</p>
            </div>
        </main>
    )
}