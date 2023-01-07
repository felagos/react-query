import { FiMessageSquare } from "react-icons/fi";

interface Props {
	url: string;
	comments?: number;
}

export const Avatar = ({ url, comments }: Props) => (
	<div className='d-flex align-items-center'>
		<img src={url} alt="User Avatar" className="avatar" />
		{comments !== undefined && <span className='px-2'>{comments}</span>}
		{comments !== undefined && <FiMessageSquare />}
	</div>
)