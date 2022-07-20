import React, { PureComponent } from 'react'
import * as d3 from "d3";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Eaglescope from './component/Eaglescope/Eaglescope'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            config: null,
            isLoaded: false,
            error: null
        }
    }
    componentDidMount(){
      const query = new URLSearchParams(window.location.search);
      let configUrl = query.get("configurl") || './config/collection-vis-config.json'
      return fetch(configUrl, {
          mode: 'cors',
          credentials: 'same-origin'
      }).then(x=>x.json()).then(x =>{
        this.setState({
            config: x,
            isLoaded: true,
            error: null
        });
      }).catch(e =>{
        console.error(e)
        this.setState({
            config: null,
            isLoaded: false,
            error: e
        });
      })
    }

    render() {
        const { config, error, isLoaded } = this.state;
        console.log(this.state)
        // handle error
        if (error) {
            return <div >Error: {error.message}</div>;
        }
        // loading
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
          return (
              <Eaglescope config={config}/>
          )
        }
    }
}
