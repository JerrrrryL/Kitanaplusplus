import React, { Component } from 'react'
import { withRouter } from './withRouter'

import "./Page.css"

class Page extends Component {
    render() {
        return (
            <div className="bio">
                <div>
                    <h2>Kitana++</h2>
                    <p>Kitana++ is a platform built on top of <a href={'https://www.dropbox.com/s/u6d8tvg5e4eatd6/kitana.pdf?dl=0'}>Kitana.</a></p>
                    <p>Kitana++ supports scalable AutoML that finds useful datasets to union or join with your dataset to provide better utilities!</p>
                </div>
            </div>
        )
    }
}

export default withRouter(Page)