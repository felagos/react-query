import { useState } from 'react';
import { useIssues } from '../../hooks';
import { State } from '../../models';
import { LoadingIcon } from '../../shared';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';


export const ListView = () => {
	const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
	const [state, setState] = useState<State>();
	const {
		issues,
		isLoading,
		loadMore,
		isFetching,
		hasNextPage,
	} = useIssues({ state, labels: selectedLabels });

	const onChangeLabel = (labelName: string) => () => {
		if (selectedLabels.includes(labelName)) {
			setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
		}
		else setSelectedLabels([...selectedLabels, labelName])
	}

	const onChangeState = (state?: State) => () => setState(state);

	return (
		<div className="row mt-5">

			<div className="col-8">
				{
					isLoading ?
						<LoadingIcon /> :
						<IssueList
							issues={issues}
							state={state}
							onStateChange={onChangeState}
						/>
				}

				<div className='d-flex mt-2  align-items-center mb-5'>
					<button
						className='btn btn-outline-primary'
						onClick={() => loadMore()}
						disabled={!hasNextPage || isFetching}>
						Load more ...
					</button>
				</div>

			</div>

			<div className="col-4">
				<LabelPicker
					selectedLabels={selectedLabels}
					onChange={onChangeLabel}
				/>
			</div>
		</div>
	)
}
