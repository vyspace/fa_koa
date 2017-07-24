'use strict';

import React, { Component } from 'react';
import routes from '../router/routes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhotoBrowser from '../components/PhotoBrowser';

class App extends Component {
    render() {
        return (
        <div>
            <Header />
                <div className="body-view">
                    {routes}
                </div>
            <PhotoBrowser />
            <Footer />
        </div>
        );
    }
}

export default App;
