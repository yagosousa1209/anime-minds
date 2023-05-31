import CardPost from "components/CardPost";
import AsideHome from "components/AsideHome";
import posts from 'json/posts.json';
import { Link } from "react-router-dom";

export default function MainHome() {
    const recentPosts = posts.sort((a, b) => {
        const dateA = new Date(a.datePost.split('/').reverse().join('/'))
        const dateB = new Date(b.datePost.split('/').reverse().join('/'))
        return dateB - dateA
    })
    const maxPost = recentPosts.slice(0, 6)

    return (
        <div className="flex w-full gap-8 justify-center px-4 md:px-20 lg:px-[120px] xl:px-40 2xl:px-60 max-w-maxScreen">
            <main className="px-5 py-20 text-letter_primary md:w-2/3 w-full">
                <h2 className="font-bold text-4xl mb-5 border-b leading-10 pb-3">Últimas postagens</h2>
                <section className="grid gap-5 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                    {maxPost.map(post => {
                        return (
                            <CardPost
                                title={post.title}
                                image={post.image}
                                alt={post.alt}
                                date={post.datePost}
                                dateLaunch={post.dateLaunch}
                                key={post.id}
                                typePost={''}
                                text={post.text}
                            />
                        )
                    })}
                </section>
                <div className="mt-7 w-full flex justify-center text-xl font-semibold">
                    <Link to={'/postagens'} className="py-3 px-5 bg-primary rounded-lg">Veja mais</Link>
                </div>
            </main>
            <AsideHome
                posts={recentPosts}
            />
        </div>
    )
}