import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import {setCurrentUser} from './domain/user/user.service';
import Main from './Main';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Main as any,
    domElementGetter: () => document.getElementById('tweets') as any,
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = (props: any) => {
    setCurrentUser(props.authToken);
    return reactLifecycles.mount(props);
};

export const unmount = [reactLifecycles.unmount];
