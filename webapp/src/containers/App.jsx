'use strict';

import React, { Component } from 'react';
import routes from '../router/routes';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import PhotoBrowser from '../components/PhotoBrowser';
import Popup from '../containers/Popup';

class App extends Component {
    render() {
        return (
        <div>
            <Header />
                <div className="body-view" id="bodyView">
                    {routes}
                </div>
            <Footer />
            <PhotoBrowser />
            <Popup />
        </div>
        );
    }
}

export default App;
