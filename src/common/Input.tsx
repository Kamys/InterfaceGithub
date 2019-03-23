import * as React from 'react';
import { FormEvent } from 'react';
import styled from 'styled-components';

interface IProps {
	label: string;
	name: string;
	onChange: (event: FormEvent<HTMLInputElement>) => void;
}

const Search = styled.input`
  height: 20px;
  margin-bottom: 15px;
  background-color: transparent;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #007cb3;
`;
const Input = ({ label, onChange, name }: IProps) => (
	<Search
		placeholder={label}
		onChange={onChange}
		name={name}
		type='search'
		required
	/>
);

export default Input;