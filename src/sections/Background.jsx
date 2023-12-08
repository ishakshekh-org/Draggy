import Navbar from './Navbar';
import { BsEmojiDizzyFill } from "react-icons/bs";


const Background = () => {
	return (
		<div className="w-full h-screen fixed z-[2] top-0 left-0 bg-background">
			<Navbar />
			<h1 className="text-[20vw] leading-none tracking-tight absolute top-1/2 left-1/2 text-text/10 -translate-x-[50%] -translate-y-[50%]">
				<BsEmojiDizzyFill />
			</h1>
		</div >
	)
}

export default Background