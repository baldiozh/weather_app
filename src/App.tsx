import { useState, ChangeEvent, useEffect } from "react"
import Search from "./components/Search"
import { optionType } from "./types"

const App = (): JSX.Element => {
	const [term, setTerm] = useState<string>('')
	const [options, setOptions] = useState<[]>([])
	const [city, setCity] = useState<optionType | null>(null)
	const [forecast, setForecast] = useState<null>(null)

	const getSearchOptions = (value: string) =>{
		fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()},
			&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
		.then((res) => res.json())
		.then((data) => setOptions(data))
	
	}
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim()
		setTerm(e.target.value)
		// console.log(term)
		if (value === '') return 
		getSearchOptions(value)
	}

	const getForecast = (city: optionType,) => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?
		lat=${city.lat}&lon=${city.lon}&units=metric
		&appid=${process.env.REACT_APP_API_KEY}`)
		.then(res => res.json())
		.then(data => setForecast(data))
	}
	const onSubmit = () => {
		if (!city) return
		getForecast(city)
	}

	const onOptionSelect = (option: optionType) => {
		setCity(option)
		// console.log(option.name)
	}

	useEffect(() => {
		if(city){
			setTerm(city.name)
			setOptions([])
		}
	}, [city])

	return (
	<main className="flex justify-center items-center h-[100vh] w-full"> 
	{/* bg-gradient-to-br from-sky-300 via-rose-300 to-lime-300 */}
		{ forecast ? (
			'we have fc'
		): (
		<Search 
			term={term} 
			options={options} 
			onInputChange={onInputChange}
			onOptionSelect={onOptionSelect} 
			onSubmit={onSubmit} 
		/>
		)}
	</main>
  )
}

export default App
