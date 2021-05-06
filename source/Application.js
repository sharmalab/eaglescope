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
            pathConfig: '../config/router.json',
            isLoaded: false,
            error: null,
            paths: null
        }
    }

    componentDidMount() {

        // loading the path config for react router
        d3.json(this.state.pathConfig).then(paths => {
            this.setState({ isLoaded: true, paths })
        }).catch(error => {
            // TODO error log
            console.error(error)
            this.setState({
                isLoaded: true,
                error
            });
        })
    }
    render() {
        const { error, isLoaded, paths } = this.state;
        // handle error
        if (error) {
            return <div >Error: {error.message}</div>;
        }
        // loading 
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        // 
        return (
            <Router>
                <Switch>
                    {paths.map((item, idx) => <Route key={idx} path={[`/${item.path}`]} exact render={(routeProps) => <Eaglescope {...routeProps} config={item.config}/>} />)}
                </Switch>
            </Router>

        )
    }
}
