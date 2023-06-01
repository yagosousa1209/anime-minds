import CardPost from "components/CardPost";
import { Link } from "react-router-dom";

export default function AsideHome({ posts }) {
    const postsRead = posts.map(e => e);
    const postsFilter = postsRead.filter(e => e.category === 'launch')

    return (
        <aside className="w-1/3 hidden md:flex flex-col pl-10 mt-5 text-letter_primary">
            <h2 className="text-3xl lg:text-4xl font-bold pb-1 border-b">Lançamentos</h2>
            <section className="flex flex-col gap-4 divide-y">
                {postsFilter.map(post => {
                    return (
                        <CardPost
                            image={post.image}
                            alt={post.alt}
                            title={post.title}
                            dateLaunch={post.dateLaunch}
                            key={post.id}
                            typePost={'launch'}
                        />
                    )
                })}
            </section>
            <div className="mt-7 w-full flex justify-center text-xl font-semibold">
                <Link to={'/postagens'} className="py-3 px-5 bg-primary rounded-lg">Veja mais</Link>
            </div>
        </aside>
    )
}