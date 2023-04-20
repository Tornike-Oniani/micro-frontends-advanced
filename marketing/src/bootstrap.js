import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const mount = (el) => {
  const root = createRoot(el);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

if (process.env.NODE_ENV === 'development') {
  const element = document.getElementById('_marketing-feed-root');

  if (element) {
    mount(element);
  }
}

export { mount };
