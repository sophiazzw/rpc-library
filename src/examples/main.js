import React from 'react';
import ReactDOM from 'react-dom';
import Index from './common/Index';

const render = () => {
  ReactDOM.render(
    <Index />
  , document.getElementById('app'));
}

render();

if (module.hot) {
  module.hot.accept(Index, () => render());
}