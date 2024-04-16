import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from './components/ContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
    </ContextProvider>,
)
