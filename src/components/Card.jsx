import { FcLike } from "react-icons/fc";
import { motion } from "framer-motion"


const Card = ({ desc, text, info, l1, href1, l2, href2, l3, href3, reference }) => {
	return (
		<motion.div
			drag
			dragConstraints={reference}
			whileDrag={{ scale: 1.1 }}
			dragElastic={1}
			dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
			className="relative w-60 h-72 bg-white/10 backdrop-blur-[8px] backdrop-brightness-150 backdrop-saturate-150 rounded-[40px] px-8 py-10 overflow-hidden "
		>
			<p className='text-sm font-semibold capitalize tracking-wider'>
				{info}
			</p>
			<p className='text-[14px] mt-10 font-semibold leading-7'>
				{desc}
				<a href={href1} target="_blank" rel="noreferrer">{l1}</a> <br />
				<a href={href2} target="_blank" rel="noreferrer">{l2}</a> <br />
				<a href={href3} target="_blank" rel="noreferrer">{l3}</a>
			</p>
			<div className="border-t absolute bottom-0 w-full py-3 px-8 left-0 ">
				<div className="flex items-center justify-between">
					<h5>{text}  </h5>
					<FcLike />
				</div>
			</div>
		</motion.div>
	)
}

export default Card