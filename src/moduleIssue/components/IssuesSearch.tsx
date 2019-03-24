import { Component } from 'react';
import * as React from 'react';

import Input from '~/common/Input';
import styled from 'styled-components';
import Button from '~/common/Button';

export interface IState {
	userName: string;
	projectName: string;
}

export interface IProps {
	onSearch: (search: IState) => void;
}

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

class IssuesSearch extends Component<IProps, IState> {

	state: IState = {
		userName: '',
		projectName: '',
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
			<Form onSubmit={this.onSubmit}>
				<Input
					onChange={this.onChange}
					name='userName'
					placeholder='User name'
					value={this.state.userName}
					required
				/>
				<Input
					onChange={this.onChange}
					name='projectName'
					placeholder='Project name'
					value={this.state.projectName}
					required
				/>
				<Button type='submit'>Show issues</Button>
			</Form>
		);
	}
}

export default IssuesSearch;