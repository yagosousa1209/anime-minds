
export default function CardPost({ image, alt, title, typePost, text = null, dateLaunch = null, date = null }) {
    if (dateLaunch !== null) {
        var dateLaunchCheck = `Data de lançamento: ${dateLaunch}`
    }

    const HiddenElements = type => type === null ? 'hidden' : ''

    const typePostDefault = typePost.toLowerCase() === 'launch'

    const MaxH = typePost.toLowerCase() === 'notice' ? 'max-h-96' : 'max-h-60'

    if (text !== null) {
        var limitCaractersCard = text.slice(0, 100)
        if (text.length > 100) {
            limitCaractersCard += '...'
        }
    }

    return (
        <article className="text-letter_primary max-md:max-w-maxW_Card">
            <img className={`${MaxH} max-md:max-h-40 max-lg:max-h-60 object-cover w-full mb-1 ${typePostDefault ? 'mt-5' : ''}`} src={image} alt={alt} />
            <p className={`text-sm text-letter_secundary font-medium mb-4 ${HiddenElements(date)}`}>{date}</p>
            <h2 className={`text-${typePostDefault ? "xl leading-7 mb-2" : "2xl"} font-semibold leading-10`}>{title}</h2>
            <p className={`text-base leading-5 my-3 ${HiddenElements(text)}`}>{limitCaractersCard}</p>
            <p className={`text-sm text-letter_secundary font-medium ${HiddenElements(dateLaunchCheck)}`}>{dateLaunchCheck}</p>
        </article>
    )
}