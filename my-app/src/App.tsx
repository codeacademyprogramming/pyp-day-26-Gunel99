import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { RoomPage } from './modules/Rooms/components';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Rooms />
        </Route>
        <Route path="/:roomId">
          <Reservations />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
