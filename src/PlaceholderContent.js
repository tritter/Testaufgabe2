import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class PlaceholderContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      imageURL: null
    };
  }
  
  componentDidMount(){
    this.fetchContent(this.props.file)
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({imageURL: null})
    this.fetchContent(nextProps.file)
  }
  
  fetchContent(file){
    fetch(file)
      .then(response => response.json())
      .then(result => this.onSetContent(result));
  }
  
  onSetContent = (result) => {
    const name = result.name
    const age = result.age 
    const color = result.male ? '0000FF' : 'FF69B4'
    this.setState({ imageURL: `http://via.placeholder.com/500x500/${color}/ffffff?text=${name}+${age}` });
  }
  
  handleClose = (e) => {
    this.props.onCloseContent()
  }

  render() {
    return (
      <div>
      <Button bsStyle="danger" onClick={this.handleClose}>Close</Button>
      {!this.state.imageURL &&
        <p>Loading...</p>
      }
      {this.state.imageURL &&
        <img src={this.state.imageURL} alt="Representing a contact"/>
      }
      </div>
    );
  }
}

export default PlaceholderContent;