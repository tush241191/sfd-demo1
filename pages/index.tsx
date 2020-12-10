// pages/index.jsx
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home = () => {
	const url = "https://d5jmjyzrse4ui.cloudfront.net/assets/bg-mgm.webm";
	
	return (
		<div className="relative bg-black overflow-hidden h-screen overflow-hidden z-10 border-b-0 border-white">
			<video autoPlay muted loop id="myVideo" className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto ">
				<source src={url} type="video/webm" />
                    Your browser does not support HTML5 video.
        </video>
			<div className="relative h-full pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
				<Navbar />
				<div className="absolute bottom-5 w-full flex justify-center">
					<button className="px-2 py-1 border border-white bg-transparent text-white text-sm">Button1</button>
				</div>
			</div>
		</div>
	)
}

export default Home
