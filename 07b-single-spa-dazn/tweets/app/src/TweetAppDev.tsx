import React from 'react';
import {render} from 'react-dom';
import styled from 'styled-components';
import Main from './Main';
import {setCurrentUser} from './domain/user/user.service';
import './static/global.css';


setCurrentUser('@Lars');
const TweetAppDev = () => (
    <Container>
        <Main/>
    </Container>
);
const Container = styled.div`
  background: var(--app-light-color);
`;
render(<TweetAppDev/>, document.querySelector('main') as any);
