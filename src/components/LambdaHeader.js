import React from 'react';
import styled from 'styled-components';


const LambdaHeader = () => {
    return(
    <HeaderStyle>
      <img width="40" src="https://i.ibb.co/8cX51NC/Lambda-Logo-Red.png"/>
      <div>Sprint Challenge 3.3</div>
    </HeaderStyle>);
}

export default LambdaHeader;

const HeaderStyle = styled.nav`
  padding: 0.5em;
  background-color: #333333;
  color:white;
  font-size: 1.25rem;
  font-family: "Lato";
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    padding: 0.5em;
    width:25px;
  }
`