//Components
import App from './App.tsx';
import Router from './routes/index.tsx';
import { createRoot } from 'react-dom/client';

//Styles
import './index.css';

createRoot(document.getElementById('root')!).render(
  <App>
      <Router/>
  </App>
);
