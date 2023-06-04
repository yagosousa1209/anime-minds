import { FiFilter } from 'react-icons/fi'
import posts from 'json/posts.json'
import CardPost from 'components/CardPost'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Posts() {
    const [filterPosts, setFilterPosts] = useState('')

    const recentPosts = posts.sort((a, b) => {
        const dateA = new Date(a.datePost.split('/').reverse().join('/'))
        const dateB = new Date(b.datePost.split('/').reverse().join('/'))
        return dateB - dateA
    })

    const funFilterPosts = filterPosts
        ? recentPosts.filter(post => post.category === filterPosts) : recentPosts

    return (
        <main className="bg-background text-letter_primary flex flex-col items-center">
            <div className='px-4 md:px-20 lg:px-[120px] xl:px-40 2xl:px-60 max-w-maxScreen'>
                <section
                    className="flex justify-end items-center mt-3">
                    <FiFilter />
                    <select
                        className="bg-background cursor-pointer border-b focus:outline-none ml-1"
                        value={filterPosts}
                        onChange={e => setFilterPosts(e.target.value)}
                    >
                        <option value="" className="cursor-pointer">Todos</option>
                        <option value="launch" className="cursor-pointer">Lançamentos</option>
                        <option value="notice" className="cursor-pointer">Notícias</option>
                    </select>
                </section>
                <section className='grid gap-5 my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                    {funFilterPosts.map(post => {
                        return (
                            <Link to={`/postagem/${post.id}`} key={post.id}>
                                <CardPost
                                    title={post.title}
                                    image={post.image}
                                    alt={post.alt}
                                    date={post.datePost}
                                    dateLaunch={post.dateLaunch}
                                    typePost={''}
                                    text={post.text}
                                />
                            </Link>
                        )
                    })}
                </section>
            </div>
        </main>
    )
}