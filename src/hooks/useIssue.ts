import { useQuery } from "@tanstack/react-query"
import { Issue } from "../models"
import { fetchIssueById, fetchIssueComments } from "../services/git.service"

export const useIssue = (issueId: number) => {

	const queryIssue = useQuery<Issue>(['issue', issueId], () => fetchIssueById(issueId));
	const queryComments = useQuery<Issue[]>(
		['issue', issueId, 'comments'], 
		() => fetchIssueComments(queryIssue.data!.number),
		{
			enabled: queryIssue.data !== undefined
		});

	return {
		queryIssue,
		queryComments
	}

}