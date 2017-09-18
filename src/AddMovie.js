import React, { Component } from 'react';

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            year: (new Date()).getFullYear(),
            watched: false
        };
    }

    render() {
        return (
            <div id="add-movie" className="row">
                <form
                    className="col s10"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.addFn(this.state);
                    }}>
                    <div className="row">
                        <input
                            className="input-field col s12 m4"
                            name="title"
                            placeholder="Title"
                            type="text"
                            onChange={(e) => {
                                this.setState({
                                    title: e.target.value
                                });
                            }}
                        />
                        <input
                            className="input-field col s12 m4"
                            name="year"
                            placeholder="Year"
                            type="number"
                            min="1900"
                            max={this.state.year + 5}
                            value={this.state.year}
                            onChange={(e) => {
                                this.setState({
                                    year: e.target.value
                                });
                            }}
                        />
                        <button
                            className="btn waves-effect waves-light"
                            type="submit"
                            name="action">
                            Add movie
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddMovie;
