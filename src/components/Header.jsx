import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  width: 100%;
  height: 70px;
  background-color: lightpink;
  color: #fff;

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  box-shadow: 3px 3px 8px #999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  margin-bottom: 30px;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HeaderBox>MOAP</HeaderBox>;
  }
}

export default Header;
