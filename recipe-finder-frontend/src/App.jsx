// App.jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import DefaultViewPage from './components/DefaultViewPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/" component={DefaultViewPage} />
      </Switch>
    </Router>
  );
}

export default App;
