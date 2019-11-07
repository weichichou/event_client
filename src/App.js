import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import EventsListContainer from './components/EventsListContainer';

class App extends React.Component {
  
  // import superagent, componentDidMount

  render(){
    return (
      <Provider store={store}>
        <div>
          <Route path='/' exact component={EventsListContainer} />
          
        </div>
      </Provider>   
    )
  }
  
}

export default App;
