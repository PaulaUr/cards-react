import React from "react";
import { Provider } from 'react-redux';
import './App.css';
import Main from './components/main/Main.component';
import { ConfigureStore }  from './redux/configureStore';
import{ BrowserRouter } from 'react-router-dom';


const store = ConfigureStore();


const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      </Provider>
  </React.Fragment>
  );
}

export default App;
