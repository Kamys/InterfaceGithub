import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '~/common/Container';
import Button from '~/common/Button';

const BackButton = styled(Button)`
  margin-top: 10px;
`;

const NotFound = () => {
	return (
		<Container column>
			<h1>404</h1>
			<span>The page was not found</span>
			<Link to={'/'}>
				<BackButton>
					Back to main page
				</BackButton>
			</Link>
		</Container>
	);
};

export default NotFound;