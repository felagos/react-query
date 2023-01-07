import { useQuery } from "@tanstack/react-query"
import { State } from "../models"
import { fetchIssues } from "../services/git.service"

interface Props {
	state?: State;
	labels: string[];
}

export const useIssues = ({ state, labels }: Props) => {
	const response = useQuery(['issues', { state, labels }],
		() => fetchIssues({ state, labels }),
		{
			initialData: []
		})

	return {
		issues: response.data,
		isLoading: response.isLoading
	}

}