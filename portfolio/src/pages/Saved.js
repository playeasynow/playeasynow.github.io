import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

class Saved extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong><i>ezequiel calderon</i></strong>
                            </h1>
                        </Jumbotron>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Saved;