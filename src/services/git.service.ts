import { Label } from "../models/Label.model";

const URL_LABELS = 'https://api.github.com/repos/facebook/react/labels';

export const fetchLabels = async () => {
	const response = await fetch(URL_LABELS);
	const labels = await response.json();

	return labels as Label[];
}