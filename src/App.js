import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabbar from './Tabbar.js';
import PlaceholderContent from './PlaceholderContent.js';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      selectedIndex: 0,
      titles: ['1', '2', '3', '4'],
      renderContent: true
    };
  }
  
  /* Getting the selection of the Tabbar */
  selectionChanged = (selection) => {
    this.setState({ selectedIndex: selection, renderContent: true });
  }
  
  /* Getting the close button action of our PlaceholderContent */
  closeContent = () => {
    this.setState({renderContent: false})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ContactList</h1>
          <Tabbar titles={this.state.titles} selectedIndex={this.state.selectedIndex} onSelection={this.selectionChanged} />
        </header>
        <div className="App-content">
        <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            { this.state.renderContent &&
              <PlaceholderContent file={`${this.state.titles[this.state.selectedIndex]}.json`} onCloseContent={this.closeContent} />
            }
          </Col>
        </Row>
        </Grid>
        </div>
      </div>
    );
  }
}

export default App;
