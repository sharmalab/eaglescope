import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
class HomeButton extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.goHome = this.goHome.bind(this)
  }
  goHome(){
    const query = new URLSearchParams(window.location.search);
    const homeUrl = this.props.url || query.get("homeurl") || "../"
    console.log(homeUrl)
    window.location.href = homeUrl;
  }
  render() {
    return <Button size="lg" id={this.id} onClick={()=>{this.goHome()}}><FontAwesomeIcon icon={faHome}/></Button>
  }
}

export default HomeButton
