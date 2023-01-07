import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { State } from "../models"
import { fetchIssues } from "../services/git.service"

interface Props {
	state?: State;
	labels: string[];
}

export const useIssues = ({ state, labels }: Props) => {
	const [page, setPage] = useState(1);

	useEffect(() => {
		setPage(1);
	}, [state, labels])

	const response = useQuery(['issues', { state, labels, page }],
		() => fetchIssues({ state, labels, page }),
		{
			initialData: []
		})

	const nextPage = () => {
		if (response.data.length === 0) return;

		setPage(page + 1);
	}

	const prevPage = () => {
		if (page > 1) setPage(page - 1);
	}

	return {
		issues: response.data,
		isLoading: response.isLoading,
		isFetching: response.isFetching,
		page,
		nextPage,
		prevPage
	}

}