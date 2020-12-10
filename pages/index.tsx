// pages/index.jsx
import Head from 'next/head'
import Navbar from '../components/Navbar';
import ReactPlayer from 'react-player';
import Hls from "hls.js";
import { useEffect, useRef, useState } from 'react';

const Home = () => {
	const myRef = useRef(null);
	const [reactPlayerConfig, setReactPlayerConfig] = useState({
		playing: true,
		mute: true,
		url: "https://d5jmjyzrse4ui.cloudfront.net/assets/bg-mgm.webm"
	})

	useEffect(() => {
		var video = myRef;
		var hls = new Hls({
			xhrSetup: function (xhr, url) {
				xhr.withCredentials = true;
			}
		});
		hls.loadSource(reactPlayerConfig.url);
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED, function () {
			handlePlay();
		});
	})

	function handlePlay() {
		setReactPlayerConfig({
			...reactPlayerConfig,
			playing: true
		})
	}

	return (
		<div className="relative bg-black overflow-hidden h-screen overflow-hidden z-10 border-b-0 border-white">
			<video autoPlay muted loop id="myVideo" className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto opacity-50">
				<source src={reactPlayerConfig.url} type="video/webm" />
                    Your browser does not support HTML5 video.
        	</video>
			{/* <ReactPlayer
				ref={myRef}
				className='absolute top-0 left-0 min-w-full min-h-full w-auto h-auto'
				width='100%'
				height='100%'
				url={reactPlayerConfig.url}
				pip={false}
				playing={reactPlayerConfig?.playing}
				controls={false}
				playsinline={true}
				controlsList="nodownload"
				light={false}
				loop={true}
				playbackRate={1.0}
				volume={0.8}
				muted={reactPlayerConfig?.mute}
				onPlay={handlePlay}
			/> */}
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
