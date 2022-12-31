import { useLabels } from "../../hooks/useLabels";
import { LoadingIcon } from "../../shared/components/LoadingIcon";

export const LabelPicker = () => {

	const { data: labels, isLoading } = useLabels();

	if (isLoading) return <LoadingIcon />

	return (
		<>
			{
				labels?.map((label) => (
					<span
						key={label.id}
						className="badge rounded-pill m-1 label-picker"
						style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
					>
						{label.name}
					</span>
				))
			}
		</>
	);
}
