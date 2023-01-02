import { ENV } from "../environment";
import { Label, Issue } from "../models";

const URL_GET_LABELS = `${ENV.GITHUB_API_URL}/labels`;
const URL_GET_ISSUES = `${ENV.GITHUB_API_URL}/issues`;

const doGet = async <T>(url: string) => {
	const response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${ENV.GITHUB_TOKEN}`,
		}
	});
	const data = await response.json();

	return data as T;
}

export const fetchLabels = async () => {
	const response = await fetch(URL_GET_LABELS);
	const labels = await response.json();

	return labels as Label[];
}

export const fetchIssues = async () => {
	return await doGet<Issue[]>(URL_GET_ISSUES);
}

export const fetchIssueById = async (id: number) => {
	return await doGet<Issue>(`${URL_GET_ISSUES}/${id}`);
}

export const fetchIssueComments = async (id: number) => {
	return await doGet<Issue[]>(`${URL_GET_ISSUES}/${id}/comments`);
}