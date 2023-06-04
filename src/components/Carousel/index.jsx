import CardPost from 'components/CardPost';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'
import { Link } from 'react-router-dom';
export default function Carousel({ posts }) {
    const postsRead = posts.map(e => e);
    const postsFilter = postsRead.filter(e => e.category === 'notice')

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
        >
            {postsFilter.map(post => {
                return (
                    <SwiperSlide key={post.id}>
                        <Link to={`/postagem/${post.id}`}>
                            <CardPost
                                image={post.image}
                                alt={post.alt}
                                typePost={'notice'}
                                title={post.title}
                            />
                        </Link>
                    </SwiperSlide>)
            })}
        </Swiper>
    )
}