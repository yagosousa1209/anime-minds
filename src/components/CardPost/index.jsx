
export default function CardPost({ image, alt, title, typePost, text = null, dateLaunch = null, date = null }) {
    if(dateLaunch !== null) {
        var dateLaunchCheck = `Data de lançamento: ${dateLaunch}`
    }

    const HiddenElements = type => type === null ? 'hidden' : ''

    const typePostDefault = typePost.toLowerCase() === 'launch'

    return (
        <article className="text-letter_primary">
            <img className={`max-h-60 object-cover w-full mb-1 ${typePostDefault ? 'mt-5' : ''}`} src={image} alt={alt} />
            <p className={`text-sm text-letter_secundary font-medium mb-4 ${HiddenElements(date)}`}>{date}</p>
            <h2 className={`text-${typePostDefault ? "xl leading-7 mb-2" : "2xl"} font-semibold leading-10`}>{title}</h2>
            <p className={`text-base leading-5 my-3 ${HiddenElements(text)}`}>{text}</p>
            <p className={`text-sm text-letter_secundary font-medium ${HiddenElements(dateLaunchCheck)}`}>{dateLaunchCheck}</p>
        </article>
    )
}