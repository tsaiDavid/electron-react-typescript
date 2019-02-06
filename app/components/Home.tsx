import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const routes = require('../constants/routes.json');

const StyledContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 10px;
  text-align: center;

  h2 {
    font-size: 5rem;
  }

  a {
    font-size: 1.4rem;
  }
`;

interface IHomeProps {
  /** Put some props here */
}

export default class Home extends Component<IHomeProps> {
  render() {
    return (
      <StyledContainer data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </StyledContainer>
    );
  }
}
