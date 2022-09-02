import React from "react";
import { MdLocationOn } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi'
import { AiFillGithub, } from 'react-icons/ai'
import { SiDiscord, SiTwitter } from 'react-icons/si'
const moment = require('moment-timezone');


function Hello() {

	return (
		<>
			<h1 class="mx-auto mt-20 max-w-3xl p-4 py-10 text-5xl font-bold text-white">👋🏻 Heya, I'm Vert</h1>
			
			<div className="mx-auto mt-18 max-w-3xl p-4 space-x-2">

			<button className="px-4 py-2 font-semibold text-sm bg-neutral-600 text-white opacity-50 rounded-full shadow-sm">
				<div className="space-x-2">
				<span><MdLocationOn className="inline dark:text-white" /></span>
				<span className="-mb-0.5 text-white">
					Australia
				</span>
				</div>
			</button>

			<button className="px-4 py-2 font-semibold text-sm bg-neutral-600 text-white opacity-50 rounded-full shadow-sm">
				<div className="space-x-2">
				<span><BiTimeFive className="inline dark:text-white" /></span>
				<span className="-mb-0.5 text-white">
				{moment().tz("Australia/Queensland").format("DD/MM/YYYY h:mm a")}
				</span>
				</div>
			</button>

			<button className="px-4 py-2 font-semibold text-sm bg-neutral-600 text-white opacity-50 rounded-full shadow-sm">
				<a 
				href="https://github.com/Vert-Code"
				target={'_blank'}
				rel="noreferrer"
				>
				<div className="space-x-2">
				<span><AiFillGithub className="inline dark:text-white" /></span>
				<span className="-mb-0.5 text-white">
				Github
				</span>
				</div>
				</a>
			</button>

			<button className="px-4 py-2 font-semibold text-sm bg-neutral-600 text-white opacity-50 rounded-full shadow-sm">
				<a 
				href="https://discord.gg/QhMtj5dKqF"
				target={'_blank'}
				rel="noreferrer"
				>
				<div className="space-x-2">
				<span><SiDiscord className="inline dark:text-white" /></span>
				<span className="-mb-0.5 text-white">
				Discord
				</span>
				</div>
				</a>
			</button>

			<button className="px-4 py-2 font-semibold text-sm bg-neutral-600 text-white opacity-50 rounded-full shadow-sm">
				<a
				href="https://twitter.com/LlamaVert"
				target={'_blank'}
				rel="noreferrer"
				>
				<div className="space-x-2">
				<span><SiTwitter className="inline dark:text-white" /></span>
				<span className="-mb-0.5 text-white">
				Twitter
				</span>
				</div>
				</a>
			</button>

			</div>

            <p class="text-1x1 mx-auto max-w-3xl p-4 py-3.5 text-white opacity-60">
			Hey, I'm Vert, a developer, manager, and student located in{" "}
			<span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <a href="https://www.google.com/maps/place/Australia/" target={"_blank"} rel="noreferrer">Australia</a>
            </span>
			. I'm currently learning loads of advanced technologies to further enhance my development skills. If I'm not building, I'm likely travelling the world, drinking coffee, or bike riding around my neighbourhood. Travelling the world and visiting different cultures has been a passion of mine for years. Behind the scenes, I'm working on projects used in our everyday lives to make an impact, most of which are being worked on right now. If you wish to contact me feel free to contact me via 
			{" "} 
			<span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <a href="mailto:hi@vert.codes" target={"_blank"} rel="noreferrer">email</a>
            </span> or shoot me a message on {""}
			<span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <a href="https://discord.com/users/791433822808965161" target={"_blank"} rel="noreferrer">Discord</a>
            </span>.
			</p>
		</>
	);
}

export default Hello;