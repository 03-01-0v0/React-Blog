import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Single from './pages/single/Single';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
    const currentUser = false;
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/posts'>
                    <Home />
                </Route>
                <Route path='/register'>{currentUser ? <Home /> : <Register />}</Route>
                <Route path='/login'>{currentUser ? <Home /> : <Login />}</Route>
                <Route path='/post/:id'>
                    <Single />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
