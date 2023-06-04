import posts from 'json/posts.json'
import Error from 'pages/Error'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'

export default function Post() {
    const idPage = useParams()

    const postSelect = posts.find(post => {
        return post.id === idPage.id
    })

    if(!postSelect) {
        return <Error />
    }

    return (
        <main>
            <h1>{postSelect.title}</h1>
            <section>
                <ReactMarkdown>
                    
                </ReactMarkdown>
            </section>
        </main>
    )
}