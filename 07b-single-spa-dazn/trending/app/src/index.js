import {App} from './trendingApp';

let appContainer;

const bootstrapFn = () => {
    appContainer = document.getElementById('trending');
    return Promise.resolve();
};

const mountFn = () => new Promise(resolve => {
    new App(appContainer);
    resolve();
});

const unmountFn = () => {
    appContainer.innerHTML = '';
    return Promise.resolve();
};


export const bootstrap = [
    bootstrapFn,
];

export const mount = [
    mountFn,
];

export const unmount = [
    unmountFn,
];
