import'./app.css';
import Main from './comps/Main';
import '../node_modules//bootstrap//dist//css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import LinkPage from './linksPages/LinkPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Main/>}></Route>
      <Route path="/:title" element={ <LinkPage/>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
