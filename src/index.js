import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { StrictMode } from 'react';

const El = document.getElementById('root');
const root = ReactDOM.createRoot(El);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
