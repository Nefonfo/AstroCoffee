import {Stars} from './Stars'

type TestimonialProps = {
	name: string,
	comment: string,
	rate: number
}

export const Testimonial = ({name, comment, rate}: TestimonialProps) => {
	return (
		<div className="p-8 bg-zinc-800 shadow-xl">
			<Stars rate={rate}/>
			<p className="italic text-xl md:text-2xl text-white my-4">"{comment}"</p>
			<p className="font-serif text-xl md:text-2xl text-yellow-600">- {name}</p>
		</div>
	)
}
