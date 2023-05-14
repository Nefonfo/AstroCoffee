type StarsProps = {
	rate: number
}
export const Stars = ({rate}: StarsProps) => {

	const starsFilled = Math.floor(rate)
	const starsEmpty = 5 - starsFilled

	console.log({starsFilled, starsEmpty})

	return (
		<div className="flex gap-x-2">
			{
				starsFilled > 0 && (
					[...Array(starsFilled)].map((e, i) => (
						<svg key={`fill-${i}`} xmlns="http://www.w3.org/2000/svg"
						     className="h-8 w-8 text-yellow-300 icon icon-tabler icon-tabler-star-filled"
						     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
						     strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path
								d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
								strokeWidth="0" fill="currentColor"></path>
						</svg>
					))
				)
			}
			{
				starsEmpty > 0 && (
					[...Array(starsEmpty)].map((e, i) => (
						<svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg"
						     className="h-8 w-8 text-yellow-300 icon icon-tabler icon-tabler-star" viewBox="0 0 24 24"
						     strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path
								d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
						</svg>
					))
				)
			}
		</div>
	)
}
