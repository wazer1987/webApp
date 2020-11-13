import './App.css';
import Layout from './views/Layout/Layout'
import {Provider} from 'react-redux'
import {store} from '@/store/index.jsx'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Layout />
    </div>
    </Provider>
  );
}

export default App;
