// import { StrictMode } from 'react'; // Commenté pour éviter la race condition avec react-smoke
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <App />
);
