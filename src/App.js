import React from 'react';
import ColoredCalendar from 'components/ColoredCalendar';
import { SingleCalendar } from  'components/ColoredCalendar/SingleCalendar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ColoredCalendar />
        <SingleCalendar />
      </div>
    );
  }
}

export default App;
