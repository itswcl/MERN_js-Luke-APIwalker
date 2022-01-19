import './App.css';

import { Switch, Route } from 'react-router-dom'

import Display from './Components/Display';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <Switch>
        <Route path="/:title/:id">
          <Display />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
