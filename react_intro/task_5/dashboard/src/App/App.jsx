import './App.css';
import logo from './assets/holberton-logo.jpg';
import Notifications from '../Notifications';
import { getCurrentYear, getFooterCopy } from '../utils';

function App() {
  return (
    <>
      <div className="App">
        <div className="root-notifications">
          <Notifications />
        </div>
        <div className="App-header">
          <img src={logo} alt="holberton logo" />
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <div className="App-login">
            <div className="App-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" autoFocus />
            </div>
            <div className="App-field">
              <label htmlFor="pass">Password:</label>
              <input type="password" id="pass" name="password" />
            </div>
            <button type="button">OK</button>
          </div>
        </div>
        <div className="App-footer">
          <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </div>
      </div>
    </>
  );
}

export default App;