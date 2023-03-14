import React, { Component } from 'react'
import { withRouter } from './withRouter'
import { Grid } from 'semantic-ui-react'
import "./Contributor.css"

class Contributor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null
        }
    }

    onFileChange = event => {
        console.log(event.target.files)
        this.setState({ selectedFile: event.target.files[0] });
    };

    // TODO: Write this function to put data in the server
    onFileUpload = () => {

    };

    fileData = () => {

        if (this.state.selectedFile) {
            let fileType = this.state.selectedFile.type.split("/")[0];
            if (fileType !== 'text') {
                return (
                    <Grid rows={1}>
                        <Grid.Row>
                            Uploading invalid datatype.
                        </Grid.Row>
                    </Grid>
                );
            } else {
                return (
                    <Grid rows={3}>
                        <Grid.Row>
                            Default dataset name: {this.state.selectedFile.name}
                        </Grid.Row>
                        <Grid.Row>
                            Rename dataset: <input type="text" placeholder={this.state.selectedFile.name} />
                        </Grid.Row>
                        <Grid.Row>
                            <button onClick={this.onFileUpload}>
                                Upload!
                            </button>
                        </Grid.Row>
                    </Grid>
                );
            }
        }
    };

    render() {
        return (
            <Grid rows={3}>
                <Grid.Row className="pub">
                    Upload Dataset and specify features to be used.
                </Grid.Row>
                <Grid.Row className="pub">
                    <input type="file" onChange={this.onFileChange} />
                </Grid.Row>
                <Grid.Row className="pub">
                    {this.fileData()}
                </Grid.Row>
            </Grid>
        )
    }
}

export default withRouter(Contributor);