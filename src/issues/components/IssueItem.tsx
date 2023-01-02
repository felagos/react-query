import { useQueryClient } from '@tanstack/react-query';
import { FiInfo, FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Issue, State } from '../../models';
import { fetchIssueById, fetchIssueComments } from '../../services/git.service';
import { Avatar } from '../../shared';

interface Props {
	issue: Issue
}

export const IssueItem = ({ issue }: Props) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const doNavigation = () => navigate(`/issues/issue/${issue.number}`)

	const prefetchData = () => {
		queryClient.prefetchQuery(
			['issue', issue.number],
			() => fetchIssueById(issue.number)
		)

		queryClient.prefetchQuery(
			['issue', issue.number, 'comments'],
			() => fetchIssueComments(issue.number)
		)
	}

	const presetData = () => {
		queryClient.setQueryData(
			['issue', issue.number],
			issue,
			{
				updatedAt: new Date().getTime() + 100000
			}
		)
	}

	return (
		<div className="card mb-2 issue"
			onClick={doNavigation}
			// onMouseEnter={prefetchData}
			onMouseEnter={presetData}
		>
			<div className="card-body d-flex align-items-center">

				{issue.state === State.Open
					? <FiInfo size={30} color="red" />
					: <FiCheckCircle size={30} color="green" />}

				<div className="d-flex flex-column flex-fill px-2">
					<span>{issue.title}</span>
					<span className="issue-subinfo">{issue.number} opened 2 days ago by <span className='fw-bold'>{issue.user.login}</span></span>
				</div>

				<Avatar url={issue.user.avatar_url} comments={issue.comments} />

			</div>
		</div>
	)
}
