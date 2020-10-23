import React, { Component } from 'react';

class WowItem extends Component {
    render() {
        return (
            <div>
                <div className="wow fadeIn" data-wow-delay="0.3s">
                    <img src="https://api.banner.cinematic.mobi/cinematic/assets/preview/53d02e80-81ca-11e9-90ce-eda613dcaf03-20190909121504702_landscape.jpg" alt="img" className="img-fluid" />
                </div>
                <div className="wow fadeInLeft" data-wow-delay="0.4s">
                    <img src="https://api.banner.cinematic.mobi/cinematic/assets/preview/53d02e80-81ca-11e9-90ce-eda613dcaf03-20190909121504702_landscape.jpg" alt="img" className="img-fluid" />
                </div>
                <div className="wow fadeInRight" data-wow-delay="0.5s">
                    <img src="https://api.banner.cinematic.mobi/cinematic/assets/preview/53d02e80-81ca-11e9-90ce-eda613dcaf03-20190909121504702_landscape.jpg" alt="img" className="img-fluid" />
                </div>
                <div className="wow zoomIn" data-wow-delay="0.8s">
                    <img src="https://api.banner.cinematic.mobi/cinematic/assets/preview/53d02e80-81ca-11e9-90ce-eda613dcaf03-20190909121504702_landscape.jpg" alt="img" className="img-fluid" />
                </div>
            </div>
        );
    }
}

export default WowItem;
