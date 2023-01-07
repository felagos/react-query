import { useInfiniteQuery } from "@tanstack/react-query"
import { Issue, State } from "../models"
import { fetchIssues } from "../services/git.service"

interface Props {
	state?: State;
	labels: string[];
}

export const useIssues = ({ state, labels }: Props) => {

	const response = useInfiniteQuery(
		['issues', { state, labels, page: 1 }],
		async (data) => {
			const propsQuery = data.queryKey[1] as Props;

			return await fetchIssues({
				state: propsQuery.state,
				labels: propsQuery.labels,
				page: data.pageParam
			});

		},
		{
			getNextPageParam: (lastPage, pages) => {
				if (lastPage.length === 0) return;

				return pages.length + 1;
			}
		})

	return {
		issues:  response?.data?.pages?.flat() || [],
		isLoading: response.isLoading,
		isFetching: response.isFetching,
		loadMore: response.fetchNextPage,
		hasNextPage: response.hasNextPage
	}

}