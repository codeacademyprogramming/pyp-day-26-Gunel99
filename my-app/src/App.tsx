import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { RoomPage } from './modules/Rooms/components';

function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route path="/room" component={RoomPage} />
        <Redirect to="/room" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
