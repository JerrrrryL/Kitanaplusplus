import React, { Component } from 'react'
import { withRouter } from './withRouter'
import "./Contributor.css"

class Contributor extends Component {
    render() {
        return (
            <div className="pub">
                Upload Dataset and specify features to be used.
            </div>
        )
    }
}

export default withRouter(Contributor);