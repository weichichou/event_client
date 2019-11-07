import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {
  
  // import superagent, componentDidMount

  render(){
    return (
      <Provider store={store}>
        <div>
          <Route path='/' exact component={Home} />
        </div>
      </Provider>   
    )
  }
  
}

export default App;
