import { BrowserRouter} from 'react-router-dom';
import {Navbar} from "./components/Navbar"
import {Router} from "./components/Router"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <Navbar/>
            <Router/>
          </div>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
