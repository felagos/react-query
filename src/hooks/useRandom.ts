import { useQuery } from "@tanstack/react-query";
import { getRandomNumber } from "../services/number.service";

export const useRandom = () => {
	const query = useQuery(['randomNumber'], getRandomNumber);

	return {
		data: query.data,
		isLoading: query.isLoading,
		isFetching: query.isFetching,
		error: query.error,
		isError: query.isError,
		refetch: query.refetch
	}
};