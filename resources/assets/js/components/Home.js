import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1>Testing</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
