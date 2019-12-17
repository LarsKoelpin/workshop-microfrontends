import { App } from './trendingApp';

let appContainer;
let slowDown;

const bootstrapFn = () => {
  const urlParams = new URLSearchParams(window.location.search);
  slowDown = !!urlParams.get('slowdown');
  appContainer = document.getElementById('trending');
  return Promise.resolve();
};

const mountFn = () => {
  return new Promise(resolve => {
    if (slowDown) {
      setTimeout(() => {
        new App(appContainer);
        resolve();
      }, 5000);
    } else {
      new App(appContainer);
      resolve();
    }
  });
};

const unmountFn = () => {
  appContainer.remove();
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
