import { useRef } from "react";
import Card from "../components/Card"
import { data } from '../sections/constant';

const Foreground = () => {

	const ref = useRef(null)


	return (
		<div ref={ref} className="w-full h-full absolute z-[3] top-0 left-0 flex  flex-wrap overflow-x">
			{
				data.map(item => (
					<Card data={item}
						key={item}
						desc={item.desciption}
						text={item.text}
						info={item.info}
						l1={item.l1Name}
						l2={item.l2name}
						l3={item.l3name}
						href1={item.l1Href}
						href2={item.l2href}
						href3={item.l3herf}
						reference={ref}
					/>
				))
			}
		</div>
	)
}

export default Foreground


