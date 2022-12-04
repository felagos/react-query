import { useEffect, useReducer, useState } from 'react';
import './App.scss'

const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

const getRandom = async () => {
	const response = await fetch(url);
	const number = await response.json();
	return +number;
}

export const App = () => {
	const [number, setNumber] = useState<number>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [key, forceRefresh] = useReducer(x => x + 1, 0);

	useEffect(() => {
		setIsLoading(true)
		getRandom()
			.then(setNumber)
			.catch(err => setError(err.message))
	}, [key])

	useEffect(() => {
		if (number) setIsLoading(false)
	}, [number])

	useEffect(() => {
		if (error) setIsLoading(false)
	}, [error])

	return (
		<div className='container'>
			{
				isLoading ?
					(<h2>Cargando ...</h2>) :
					(<h2>Número Aleatorio: {number}</h2>)
			}
			{
				!isLoading && error && (<h3>{error}</h3>)
			}
			<button onClick={forceRefresh} disabled={isLoading}>
				{isLoading ? '.....' : 'Nuevo número'}
			</button>

		</div>
	);

}