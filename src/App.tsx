import React from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './Board';

const PADDLE_SIZE = 20;
const GAME_WIDTH = 1000;
const GAME_HEIGHT = 500;

const DIRECTION = {
  IDLE: 0,
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4
}

interface PaddleProps {
  size: number;
  $left: boolean;
}

function App() {
  return (
    <Div className="App">
      <Board height={GAME_HEIGHT} width={GAME_WIDTH}>
        <Paddle size={PADDLE_SIZE} $left={true}/>
        <Paddle size={PADDLE_SIZE} $left={false}/>
      </Board>
    </Div>
  );
}

export default App;

const Paddle = styled.div<PaddleProps>`
  position: absolute;
  background-color: black;
  height: ${(props) => 3*props.size}px;
  width: ${(props) => props.size}px;
  ${(props) => props.$left ? "left: 1vw": "right: 1vw"};. 
  border: 2px solid SteelBlue; 
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
