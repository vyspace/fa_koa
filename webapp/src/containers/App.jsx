'use strict';

import React, { Component } from 'react';
import routes from '../router/routes';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import PhotoBrowser from '../components/PhotoBrowser';
import Popup from '../components/Popup';

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
            <Popup type="create" />
            <input type="file" className="m-file" id="multiFile" multiple="multiple" />
        </div>
        );
    }
}

export default App;
