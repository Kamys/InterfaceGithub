import { Component } from 'react';
import * as React from 'react';

import Input from '~/common/Input';
import styled from 'styled-components';

export interface IState {
	userName: string;
	projectName: string;
}

export interface IProps {
	onSearch: (search: IState) => void;
}

const Button = styled.button`
    border: none;
    padding: 0.5rem 2rem;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    cursor: pointer;
    font-size: 17px;
    margin: 0;
    text-align: center;
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

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
			<Form onSubmit={this.onSubmit}>
				<Input
					onChange={this.onChange}
					name='userName'
					label='User name'
				/>
				<Input
					onChange={this.onChange}
					name='projectName'
					label='Project name'
				/>
				<Button type='submit'>Show issues</Button>
			</Form>
		);
	}
}

export default IssuesSearch;