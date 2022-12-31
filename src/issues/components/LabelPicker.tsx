import { useLabels } from "../../hooks/useLabels";
import { LoadingIcon } from "../../shared/components/LoadingIcon";

interface Props {
	selectedLabels: string[];
	onChange: (labelName: string) => () => void;
}

export const LabelPicker = ({ selectedLabels, onChange }: Props) => {

	const { data: labels, isLoading } = useLabels();

	if (isLoading) return <LoadingIcon />

	return (
		<>
			{
				labels?.map((label) => (
					<span
						key={label.id}
						className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ''}`}
						style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
						onClick={onChange(label.name)}
					>
						{label.name}
					</span>
				))
			}
		</>
	);
}
