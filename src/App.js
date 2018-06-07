import React from 'react';
import ColoredCalendar from 'components/ColoredCalendar/coloredCalendar';
import SingleCalendar from  'components/ColoredCalendar/singleCalendar'

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
