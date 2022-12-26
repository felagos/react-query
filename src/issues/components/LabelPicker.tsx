import { Label } from "../../models/Label.model"

interface Props {
	labels?: Label[]
}

export const LabelPicker = ({ labels = [] }: Props) => {

	return (
		<>
			{
				labels.map((label) => (
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
