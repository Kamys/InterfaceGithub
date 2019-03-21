import { Component } from 'react';
import * as React from 'react';

export interface IState {
	userName: string;
	projectName: string;
}

export interface IProps {
	onSearch: (search: IState) => void;
}

const Input = ({ label, onChange, name }) => (
	<>
		<label>{label}</label>
		<input
			onChange={onChange}
			name={name}
			type='search'
		/>
	</>
);

class IssuesSearch extends Component<IProps, IState> {

	state: IState = {
		projectName: '',
		userName: '',
	};

	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		} as any);
	}

	onSubmit = event => {
		event.preventDefault();
		this.props.onSearch(this.state);
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<Input
					onChange={this.onChange}
					name='userName'
					label='User name:'
				/>
				<Input
					onChange={this.onChange}
					name='projectName'
					label='Project name:'
				/>
				<button type='submit'>Show issues</button>
			</form>
		);
	}
}

export default IssuesSearch;