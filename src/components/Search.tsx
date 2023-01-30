import { ChangeEvent } from "react"
import { optionType } from "../types"

type Props = {
	term: string
	options: []
	onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
	onOptionSelect: (option: optionType) => void
	onSubmit: () => void
}

const Search = ({
	term, 
	options, 
	onInputChange, 
	onOptionSelect, 
	onSubmit,
}: Props): JSX.Element => {
	
	return (
	<main className="flex justify-center items-center h-[100vh] w-full"> 
	{/* bg-gradient-to-br from-sky-300 via-rose-300 to-lime-300 */}
	  <section className="w-full md:max-w-[500px] p-4 flex flex-col 
		  text-center items-center justify-center md:px-10 lg:p-24 
		  h-full lg:h-[500px] bg-white bg-opacity-20 
		  backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
		  <h1 >
				<span className="font-semi text-lg">Прогноз погоды</span>
		  </h1>
		  <p className="text-base font-light mt-2 py-2">
				Выбирайте место, погода которого вас интересует :)
		  </p>
		  <div className="relative flex mt-8 md:mt-4">
			  <input type="text" value={term} 
					className="px-2 py-1 rounded-1-md border-2 border-white bg-white bg-opacity-75"
					onChange={onInputChange}/>

				<ul className="absolute top-9 bg-white ml-1 rounded-b-md">
					{options.map((option: optionType, index: number) => (
						<li key={option.name + '-' + index}>
							<button className="text-left text-sm w-full 
							hover:bg-zinc-700 hover:text-white 
							px-2 py-1 cursor-pointer" 
							onClick={() => onOptionSelect(option)}>
								{option.name}
							</button>
						</li> 
					
					))}
				</ul>
				
			  <button className="rounded-r-md border-2 border-zinc-100 
					hover:border-zinc-500 hover:text-zinc-500 text-zinc-100
					px-2 py-1 cursor-pointer" onClick={onSubmit}>
					Поиск
			  </button>
		  </div>
		  
	  </section>
	</main>
  )
}

export default Search
