const App = () => {
	return (
	<main className="flex justify-center items-center bg-gradient-to-br
		 from-sky-300 via-rose-300 to-lime-300 h-[100vh] w-full">

	  <section className="w-full md:max-w-[500px] p-4 flex flex-col 
		  text-center items-center justify-center md:px-10 lg:p-24 
		  h-full lg:h-[500px] bg-white bg-opacity-20 
		  backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
		  <h1 >
			  <span className="font-semi">Прогноз погоды</span>
		  </h1>
		  <p className="text-sm font-light mt-2 py-2">
			  Выбирайте место, погода которого вас интересует :)
		  </p>
		  <div className="flex mt-8 md:mt-4">
			  <input type="text" value={''} 
				  className="px-2 py-1 rounded-1-md border-2 border-white bg-white bg-opacity-75 ">
			  </input>
			  <button className="rounded-r-md border-2 border-zinc-100 
				  hover:border-zinc-500 hover:text-zinc-500 text-zinc-100
				  px-2 py-1 cursor-pointer">
				  Поиск
			  </button>
		  </div>
		  
	  </section>
	</main>
  )
}

export default App
