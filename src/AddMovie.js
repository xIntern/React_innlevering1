import React, { Component } from 'react';

const year = (new Date()).getFullYear();

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            year: year,
            watched: false
        };
    }

    render() {
        return (
            <div id="add-movie">
                <form
                    className="center"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.addFn(this.state);
                        this.setState({
                            title: '',
                            year: year
                        });
                    }}>
                    <div className="row">
                        <div className="input-field col s12 m5">
                            <input
                                id="title"
                                placeholder="Title"
                                type="text"
                                required
                                value={this.state.title}
                                onChange={(e) => {
                                    this.setState({
                                        title: e.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="input-field col s12 m5">
                            <input
                                id="year"
                                placeholder="Year"
                                type="number"
                                min="1900"
                                max={year + 10}
                                required
                                value={this.state.year}
                                onChange={(e) => {
                                    this.setState({
                                        year: e.target.value
                                    });
                                }}
                            />
                        </div>
                        <button
                            className="col s12 m2 btn-large waves-effect waves-light"
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
