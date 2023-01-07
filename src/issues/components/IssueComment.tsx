import ReactMarkdown from "react-markdown"
import { Issue } from "../../models";
import { Avatar } from "../../shared";

interface Props {
	issue: Issue;
}

export const IssueComment = ({ issue }: Props) => {
	return (
		<div className="col-12">
			<div className="card border-white mt-2">
				<Avatar url={issue.user.avatar_url} />
				<div className="card-body text-dark">
					<ReactMarkdown>{issue.body}</ReactMarkdown>
				</div>
			</div>
		</div>
	)
}
