import React from 'react';
import Routes from './Routes';
import { Navbar } from './components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div
          style={{
            left: '10%',
            marginTop: '8%',
            padding: 10
          }}
        >
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
