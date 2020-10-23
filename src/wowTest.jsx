import React, { Component } from 'react';
import { WOW } from 'wowjs';
import WowItem from './WowItem';

class WowTest extends Component {
    componentDidMount() {
        const wow = new WOW({
            offset: 100,
            mobile: false,
            live: true
        })

        wow.init();
    }
    render() {
        return (
            <div>
                <WowItem />
            </div>
        );
    }
}

export default WowTest;
