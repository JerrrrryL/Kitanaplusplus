import React, { Component } from 'react'
import { withRouter } from './withRouter'
import "./Contributor.css"

class Requestor extends Component {
    render() {
        return (
            <div className="pub">
                Submit Auto ML requests, with minimum utility increase requirement!
            </div>
        )
    }
}

export default withRouter(Requestor);