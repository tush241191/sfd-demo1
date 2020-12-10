// pages/index.jsx
import Head from 'next/head'
import Navbar from '../components/Navbar'

import { config as f_config, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

f_config.autoAddCss = false;
library.add(fas, fab, far);

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
				<div className="absolute bottom-5 w-full flex justify-center space-x-2">
					<img className="w-10 h-10" src="/arrow-circle-left-solid.svg"></img>
					<img className="w-10 h-10" src="/arrow-circle-up-solid.svg"></img>
					<img className="w-10 h-10" src="/arrow-circle-right-solid.svg"></img>
				</div>
			</div>
		</div>
	)
}

export default Home
