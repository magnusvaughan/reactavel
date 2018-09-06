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
                        <p>
                            I'm{' '}
                            <a href="https://twitter.com/magnusvaughan" target="_blank">
                                Magnus
                            </a>
                        </p>
                        <p>
                            I'm a Software Developer at{' '}
                            <a href="https://www.framestore.com/" target="_blank">
                                Framestore
                            </a>
                            .
                        </p>
                        <p>I use:</p>
                        <li>
                            PHP
                            <ul>
                                <li>Laravel</li>
                                <li>Drupal</li>
                            </ul>
                        </li>
                        <li>
                            JavaScript
                            <ul>
                                <li>React</li>
                                <li>AngularJS</li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
