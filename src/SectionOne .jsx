import React, { Component } from 'react';

class SectionOne extends Component {
    render() {
        return (
            <section className="d-flex align-items-center justify-content-center">
                <h1 className="display-4 wow bounceIn" data-wow-delay="0.3s">Section 1</h1>
                <div className="wow zoomIn" data-wow-delay="0.5s">
                    <img src="https://api.banner.cinematic.mobi/cinematic/assets/preview/53d02e80-81ca-11e9-90ce-eda613dcaf03-20190909121504702_landscape.jpg" alt="img" className="img-fluid" />
                </div>
                <div className="wow fadeInLeft" data-wow-delay="0.5s">
                    <img src="https://api.banner.cinematic.mobi/cinematic/assets/preview/53d02e80-81ca-11e9-90ce-eda613dcaf03-20190909121504702_landscape.jpg" alt="img" className="img-fluid" />
                </div>
            </section>
        );
    }
}

export default SectionOne;