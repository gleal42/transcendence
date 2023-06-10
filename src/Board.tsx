import React from 'react';
import './App.css';
import styled from 'styled-components';

interface BoardProps{
  height: number;
  width: number;
}

const Board = styled.div<BoardProps>`
  position: relative;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: SeaGreen   ;
`;

export default Board;