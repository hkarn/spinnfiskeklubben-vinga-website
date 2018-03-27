import React from 'react';
import SlideFrame from './SlideFrame';

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      j: 0,
      frame: false
    };
    this.slides = [
      'photos/view.jpg',
      'photos/view2.jpg',
      'photos/view3.jpg',
      'photos/view4.jpg'
    ];
  }

  static async getInitialProps({req}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return {userAgent};
  }

  componentDidMount() {
    const {delay = 8500} = this.props;
    let timer1 = setTimeout(() => {
      const {j = 1} = this.state;
      this.setState({j: j + 1, frame: true});
      this.interval = setInterval(this.doSlide, delay);
      clearTimeout(timer1);
    }, delay);
  }

  componentWillUmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  doSlide = () => {
    const {slides = this.slides, duration = 3000} = this.props;

    const {i = 0, j = 1} = this.state;
    this.setState({frame: true});

    let timer = setTimeout(() => {
      let iinc = 1;
      let jinc = 1;
      if (i >= slides.length - 1) {
        iinc = -i;
      }
      if (j >= slides.length - 1) {
        jinc = -j;
      }
      this.setState({i: i + iinc, j: j + jinc, frame: false});
      clearTimeout(timer);
    }, duration);
  }

  render() {
    const {slides = this.slides, height = 'calc(100% - 113px)', width = '100%'} = this.props;

    const {i = 0, j = 0, frame = true} = this.state;

    const slideWrapperStyle = {
      width: width,
      height: height,
      overflow: 'hidden',
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      zIndex: '998',
      backgroundImage: 'url("static/' + slides[i] + '")'
    };

    return (
      <div className="slideWrapper" style={slideWrapperStyle}>
        {frame ?
          <SlideFrame key={i} j={j} slides={slides} /> : null }
      </div>

    );
  }
}
