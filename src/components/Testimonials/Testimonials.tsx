import {useRef} from 'react'
import SwiperCore, {Navigation, Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Testimonial} from './Testimonial'

import 'swiper/swiper-bundle.css'

type TestimonialEntry = {
	id: number,
	name: string,
	comment: string,
	rate: number
}

type TestimonialsProps = {
	testimonials: TestimonialEntry[]
}

SwiperCore.use([Navigation, Autoplay])
const Testimonials = ({testimonials}: TestimonialsProps) => {

	const swiperRef = useRef<SwiperCore | null>(null)

	return (
		<div className="w-full flex justify-center md:py-12">
			<div className="w-full max-w-7xl flex px-4 md:px-0">
				<button className="hidden md:block" onClick={() => swiperRef.current?.slidePrev()}>
					<svg xmlns="http://www.w3.org/2000/svg"
					     className="h-16 w-16 text-yellow-600 icon icon-tabler icon-tabler-chevron-left"
					     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
					     strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M15 6l-6 6l6 6"></path>
					</svg>
				</button>
				<Swiper
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					onSwiper={(instance: SwiperCore) => swiperRef.current = instance}
					slidesPerView={1}
					loop={true}
				>
					{testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial.id} className="items-center justify-center"
						             style={{display: 'flex'}}>
							<Testimonial {...testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
				<button className="hidden md:block" onClick={() => swiperRef.current?.slideNext()}>
					<svg xmlns="http://www.w3.org/2000/svg"
					     className="h-16 w-16 text-yellow-600 icon icon-tabler icon-tabler-chevron-right"
					     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
					     strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M9 6l6 6l-6 6"></path>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Testimonials