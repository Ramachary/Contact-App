import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import './style.css';
export class Home extends Component {
    render() {
        return (
            <header class="masthead">
                <div class="container h-100">
                    <div class="h-100 align-items-center justify-content-center text-center">
                        <div class="align-self-end">
                            <h1 class="text-uppercase text-white font-weight-bold">
                                {`Welcome to this project`}
                            </h1>
                            <hr class="divider my-4" />
                        </div>
                        <div class="align-self-baseline">
                            <p class="text-white-75 font-weight-light mb-5">
                                {`This Project use React js designed by Ramacharya Shukla`}
                            </p>
                            <Link class="btn btn-primary btn-xl js-scroll-trigger" to="/contact">{`Find Out Project`}</Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Home
