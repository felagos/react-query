import { useRandom } from './hooks/useRandom';
import './App.scss';

export const App = () => {
	const {
		data,
		isLoading,
		isFetching,
		error,
		isError,
		refetch
	} = useRandom();

	return (
		<div className='container'>
			{
				isFetching ?
					(<h2>Cargando ...</h2>) :
					(<h2>Número Aleatorio: {data}</h2>)
			}
			{
				!isLoading && isError && (<h3>{`${error}`}</h3>)
			}
			<button onClick={() => refetch()} disabled={isFetching}>
				{isFetching ? '.....' : 'Nuevo número'}
			</button>

		</div>
	);

}