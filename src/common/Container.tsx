import * as React from 'react';
import styled from 'styled-components';

interface IProps {
	column?: boolean;
}

const Container = styled.div<IProps>`
	max-width: 300px;
	margin: 40px auto;
	display: flex;
	flex-direction: ${props => props.column ? 'column' : 'row'};
	justify-content: center;
	align-items: center;
`;

export default Container;