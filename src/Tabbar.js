import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      titles: props.titles,
      selectedIndex: props.selectedIndex,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({titles: nextProps.titles, selectedIndex: nextProps.selectedIndex})
  }
  
  handleSelect = (key, e) => {
    e.preventDefault();
    this.props.onSelection(key)
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.state.selectedIndex} onSelect={this.handleSelect}>
        {
          this.state.titles.map((title, index) => 
            <NavItem key={index} eventKey={index} title={title}>{title}</NavItem>
          )
        }
      </Nav>
    );
  }
}

export default Tabbar;