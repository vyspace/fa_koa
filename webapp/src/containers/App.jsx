'use strict';

import React, { Component } from 'react';
import routes from '../router/routes';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
    render() {
        return (
        <div>
            <Header />
                <div className="body-view">
                    {routes}
                </div>
            <Footer />

        </div>
        );
    }
}

export default App;
