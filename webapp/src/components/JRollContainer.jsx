'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JRoll from 'jroll';
import JRollInfinite from 'jroll-infinite';
import HomeCard from './HomeCard';

class JRollContainer extends Component {
    componentWillMount() {

    }
    componentDidMount() {
        const roll = new JRoll('#wrapper', { scrollBarY: true });
        roll.infinite({
            total: 10,
            getData: (page, callback, errorCallback) => {
                this.ajax({
                    url: '',
                    success: (data) => {
                        callback(data);
                    },
                    error: () => {
                        errorCallback();
                    }
                });
            },
            template: '<div class="item">aaa</div>'
        });
    }
    init() {}
    ajax(parms) {
        const a = this.props.data;
        setTimeout(() => {
            parms.success(a);
        }, 800);
    }
    render() {
        // const data = this.props,
        //     html = data.map(cell => <HomeCard key={cell.id} data={cell} />);
        return (<div className="jroll-wrapper" id="wrapper"><div className="scroller"/></div>);
    }
}

export default JRollContainer;

