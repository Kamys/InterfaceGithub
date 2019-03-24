import * as React from 'react';
import styled from 'styled-components';

export default styled.button`
    background-color: #03a9f4;
    color: #FFF;
    cursor: pointer;
    line-height: 35px;
    padding: 0 1.5rem;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 2px;
    transition: all .3s ease-out;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
    
    :hover {
     text-decoration: none;
     box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.225);
     background-color: #23b9fc;
    }
`;