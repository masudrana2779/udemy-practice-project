import React, { Component } from 'react';
import { WOW } from 'wowjs';
import SectionOne from "./SectionOne ";
import WowItem from './WowItem';

class Wow extends Component {
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
                <div className="home">
                    <WowItem />
                    <SectionOne />
                </div>

            </div>
        );
    }
}

export default Wow;