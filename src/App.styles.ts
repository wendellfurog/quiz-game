import styled, { createGlobalStyle } from 'styled-components';
import bg from './images/bg.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${bg});
    background-size: cover;
    margin-top: 50px;
    padding: 0 px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #000;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  
  .loading {
    color: #fff;
    font-size: 1rem;
    margin: 0;
  }

  .neonText {
    color: #fff;
    text-shadow:
      0 0 1px #fff,
      0 0 10px #fff,
      0 0 15px #fff,
      0 0 42px #FF3333,
      0 0 82px #FF3333,
      0 0 92px #FF3333,
      0 0 102px #FF3333,
      0 0 151px #FF3333;
    font-family: 'Exo 2', sans-serif;
    font-size: 70px;
  }

  h1 {
    border: 0.2rem solid #00FFFF;
    border-radius: 2rem;
    padding: 0.4em;
    box-shadow: 
      0 0 .2rem #fff,
      0 0 .2rem #fff,
      0 0 2rem #0080FF,
      0 0 0.8rem #0080FF,
      0 0 2.8rem #0080FF,
      inset 0 0 1.3rem #0080FF; 
  }

  .start, .next {
    font-size: 20px;
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid $d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    heightL 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`