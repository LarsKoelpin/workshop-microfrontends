import React from 'react';
import styled from 'styled-components';

const Loading = () => <Loader />;

export default Loading;

const Loader = styled.div`
  width: 64px;
  height: 64px;
  position: absolute;
  top: 1em;
  left: 50%;
  transform: translateX(-50%);

  :after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid var(--app-primary-color);
    border-color: var(--app-primary-color) transparent var(--app-primary-color)
      transparent;
    animation: loading-anim 1.2s linear infinite;
  }

  @keyframes loading-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
