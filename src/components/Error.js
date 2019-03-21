import React from 'react';
import styled from 'styled-components';

const ErrorComponent = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, .33);
`

const ErrorMessage = styled.h4`
  text-align: center;
  color: #f1f1f1;
`

const Error = props => (
  <ErrorComponent>
    <ErrorMessage>{props.msg ? props.msg : 'Something bad (and generic) occurred.'} {':('}</ErrorMessage> 
  </ErrorComponent>
)

export default Error;