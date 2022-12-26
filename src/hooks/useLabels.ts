import { useQuery } from "@tanstack/react-query";
import { fetchLabels } from "../services/git.service";

export const useLabels = () => {
	return useQuery(['labels'], fetchLabels);
}