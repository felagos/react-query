import { useQuery } from "@tanstack/react-query"
import { fetchIssues } from "../services/git.service"

export const useIssues = () => {
	const response = useQuery(['issues'], fetchIssues, {
		initialData: []
	})

	return {
		issues: response.data,
		isLoading: response.isLoading
	}

}