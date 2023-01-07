import { Link, Navigate, useParams } from 'react-router-dom';
import { useIssue } from '../../hooks';
import { LoadingIcon } from '../../shared';
import { IssueComment } from '../components/IssueComment';

export const IssueView = () => {
	const { id = '0' } = useParams();

	const { queryIssue, queryComments } = useIssue(+id);

	if (queryIssue.isLoading) return <LoadingIcon />
	if (!queryIssue.data) return <Navigate to='./issues/list' />

	return (
		<div className="row mb-5">
			<div className="col-12 mb-3">
				<Link to='./issues/list'>Go Back</Link>
			</div>

			<IssueComment issue={queryIssue.data} />

			{
				queryComments.isLoading && <LoadingIcon />
			}

			{
				queryComments.data?.map(comment => (
					<IssueComment key={comment.id} issue={comment} />
				))
			}

		</div>
	)
}
