'use strict';

import React, { Component } from 'react';
import routes from '../router/routes';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {routes}
                <Footer />
            </div>
        );
    }
}

export default App;

