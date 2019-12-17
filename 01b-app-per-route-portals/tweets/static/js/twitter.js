const showPortal = link => {
  const style = document.createElement('style');
  //language = css
  style.innerHTML = `
  portal {
    position:fixed;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-shadow: 0 0 20px 10px #999;
    transform: scale(0.4);
    transform-origin: bottom left;
    top: 20px;
    left: 20px;
    bottom:10px;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
  }
  .portal-transition {
    transition: transform 0.4s;
  }
  .portal-reveal {
    transform: scale(1.0) translateX(-20px) translateY(20px);
  }
  @keyframes fade-in {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
`;
  const portal = document.createElement('portal');
  portal.src = link;
  portal.classList.add('portal-transition');
  portal.addEventListener('click', evt => {
    portal.classList.add('portal-reveal');
  });
  portal.addEventListener('transitionend', evt => {
    if (evt.propertyName === 'transform') {
      portal.activate();
    }
  });
  document.body.append(style, portal);
  document.addEventListener('click', e => {
    if (e.target !== portal) {
      document.body.removeChild(portal);
    }
  }, { once: true });
};


document.querySelectorAll('[data-portal]').forEach(elm => {
  elm.addEventListener('mouseover', () => {
    const link = elm.getAttribute('href');
    showPortal(link);
  });
});