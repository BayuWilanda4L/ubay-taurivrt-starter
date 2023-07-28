import { useState } from 'react'
import tauriLogo from '../src-tauri/icons/icon.png'
import viteLogo from './assets/vite.png'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind.png'
// import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="items-center justify-center flex">
			<div className="py-16 text-center max-w-7xl mx-auto">
				<h1 className="text-3xl font-semibold my-5 xl:text-[45px]">TauriVRT</h1>
				<p className="w-4/5 mx-auto">
					TauriVRT Starter is designed for you, who want to develop desktop applications using the power of Tauri, Vite, React.js, and Tailwind CSS. 🚀
				</p>
				<div className='flex justify-center items-center my-8'>
					<a href="https://tauri.app" target="_blank">
						<img src={tauriLogo} className="w-16 aspect-2 mr-4" alt="Tauri logo" />
					</a>
					<a href="https://vitejs.dev" target="_blank">
						<img src={viteLogo} className="w-16 aspect-2 mr-4" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="w-16 aspect-2 mr-4" alt="React logo" />
					</a>
					<a href="https://tailwindcss.com" target="_blank">
						<img src={tailwindLogo} className="w-16 aspect-2" alt="Tailwind logo" />
					</a>
				</div>
				<button
					onClick={() => setCount((count) => count + 1)}
					class="px-6 py-2 text-sm transition-colors duration-300 rounded-full shadow-xl text-cyan-100 bg-cyan-500 hover:bg-cyan-600 shadow-cyan-400/30"
				>
					Count is {count}
				</button>
				<p className="text-sm text-gray-500 w-4/5 mx-auto my-5 md:w-3/5">
					Edit <code>src/App.jsx</code> and save to test HMR (Hot Module Replacement)
				</p>
				<p className="text-sm text-gray-500 my-5">
					Made with ❤️ in Indonesia
				</p>
			</div>
		</div>

		// <div class=" h-screen bg-gray-300">
		// <div className='flex justify-center items-center'>
		// 	<a href="https://tauri.app" target="_blank">
		// 		<img src={tauriLogo} className="logo" alt="Tauri logo" />
		// 	</a>
		// 	<a href="https://vitejs.dev" target="_blank">
		// 		<img src={viteLogo} className="w-12 h-12" alt="Vite logo" />
		// 	</a>
		// 	<a href="https://react.dev" target="_blank">
		// 		<img src={reactLogo} className="logo" alt="React logo" />
		// 	</a>
		// 	<a href="https://tailwindcss.com" target="_blank">
		// 		<img src={tailwindLogo} className="logo" alt="Tailwind logo" />
		// 	</a>
		// </div>
		// 	<h1>Tauri + Vite + React + Tailwind</h1>
		// 	<div className="card">
		// <button onClick={() => setCount((count) => count + 1)}>
		// 	count is {count}
		// </button>
		// 		<p>
		// 			Edit <code>src/App.jsx</code> and save to test HMR
		// 		</p>
		// 	</div>
		// 	<p className="read-the-docs">
		// 		Click on the Vite and React logos to learn more
		// 	</p>
		// </div>
	)
}

export default App
