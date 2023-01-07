import { Issue, State } from '../../models';
import { IssueItem } from './IssueItem';
import classnames from 'classnames';

interface Props {
	issues: Issue[];
	state?: State;
	onStateChange: (state?: State) => () => void;
}

export const IssueList = ({ issues = [], state, onStateChange }: Props) => {
	return (
		<div className="card border-white">
			<div className="card-header bg-dark">
				<ul className="nav nav-pills card-header-pills">
					<li className="nav-item">
						<a className={classnames('nav-link', {
							active: !state
						})}
							onClick={onStateChange()}
						>All</a>
					</li>
					<li className="nav-item">
						<a className={classnames('nav-link', {
							active: state === State.Open
						})}
							onClick={onStateChange(State.Open)}
						>Open</a>
					</li>
					<li className="nav-item">
						<a className={classnames('nav-link', {
							active: state === State.Closed
						})}
							onClick={onStateChange(State.Closed)}
						>Closed</a>
					</li>
				</ul>
			</div>
			<div className="card-body text-dark">
				{
					issues.map(issue => (
						<IssueItem key={issue.id} issue={issue} />
					))

				}
			</div>
		</div>
	)
}
