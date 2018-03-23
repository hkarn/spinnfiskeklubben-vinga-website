import React from 'react';

export default class SlideFrame extends React.Component {
  static async getInitialProps({req}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return {userAgent};
  }

  render() {
    const {slides = this.slides, j = 0} = this.props;

    const outerCoverStyle = {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      zIndex: '999',
      backgroundImage: 'url("static/' + slides[j] + '")'
    };

    return (
      <div id="slide" className="outerCover" style={outerCoverStyle} />

    );
  }
}