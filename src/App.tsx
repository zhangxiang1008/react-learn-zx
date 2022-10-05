import './App.scss';
import { routers } from './routers';
import { useRoutes } from 'react-router-dom'

function App() {

  return (
    useRoutes(routers)
  );
}

export default App;
