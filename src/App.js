import React, { Component } from 'react';
import styled from 'styled-components';

const MyStyle = styled.div`
  display: inline-block;
  padding: 20px;
  margin: 20px;
  background-color: ${({pink}) => (pink ? '#F7CBF4' : '#85D3F0')};
  border: 5px solid ${({pink}) => (pink ? '#F061E7' : '#25BAF0')};
`

const App = () =>
  <div>
    <MyStyle pink>Im a pink div</MyStyle>
    <MyStyle>Im a blue div</MyStyle>
  </div>

export default App;

