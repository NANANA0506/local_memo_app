import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;

  border-radius: 10px;
  box-shadow: 3px 3px 9px #999;

  word-break: break-all;
`;

class MemoBox extends React.Component {
  constructor(props) {
    super(props);
  }
  _onDelete = (value) => {
    console.log(value);

    
  };

  render() {
    return (
      <Box>
        {this.props.value}
        <Button
          type="danger"
          size="small"
          onClick={() => this._onDelete(this.props.value)}
        >
          삭제
        </Button>
      </Box>
    );
  }
}

export default MemoBox;
