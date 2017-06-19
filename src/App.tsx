import * as React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Video from './components/video/Video';

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <Header />
        <Video />
      </div>
    );
  }
}

export default App;
