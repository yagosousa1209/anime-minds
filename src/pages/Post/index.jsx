import posts from 'json/posts.json'
import Error from 'pages/Error'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'

export default function Post() {
    const idPage = useParams()

    const postSelect = posts.find(post => {
        return post.id === idPage.id
    })

    if (!postSelect) {
        return <Error />
    }

    return (
        <main className="bg-background text-letter_primary flex flex-col items-center">
            <div className='px-4 md:px-20 lg:px-[120px] xl:px-40 2xl:px-60 max-w-maxScreen w-full'>
                <h1 className='text-5xl font-bold leading-tight mb-10'>{postSelect.title.toUpperCase()}</h1>
                <section>
                    <ReactMarkdown className='flex flex-col items-center gap-5 mb-10'>
                        {postSelect.text}
                    </ReactMarkdown>
                </section>
            </div>
        </main>
    )
}