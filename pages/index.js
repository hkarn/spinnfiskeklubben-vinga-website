import Layout from '../components/MyLayout';
import Link from 'next/link';
import _JSXStyle from 'styled-jsx/style';

let i = 1;

const slides = [
  'view.jpg',
  'view2.jpg',
  'view3.jpg',
  'view4.jpg'
];

setInterval(() => {
  if (i >= slides.length - 1) {
    i = 1;
  } else {
    i++;
  }
}, 1000);

const setSlide = () => (
  <div id="slide" className="outerCover" style={{backgroundImage: 'url("static/photos/' + slides[i] + '")'}}>
    <_JSXStyle styleId="outerCover" css={`
    div.outerCover {
      color: white; 
      width: 100%; 
      height: 100%; 
      overflow: hidden;
      position: absolute;
      text-align: center; 
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: fixed;
      background-size: cover;
    }
  `} />
  </div>);

const renderSlide = i => {
  if (i===1 || i===3) {
    return setSlide();
  }
  return (<div />);
};

export default () => (
  <Layout>
    <div className="slideWrapper" style={{backgroundImage: 'url("static/photos/' + slides[i - 1] + '")'}}>
      {renderSlide(i)}
      <div className="innerCoverText">
        <h1>Välkommen till Rävholmen</h1>
        <a className="btn btn-success btn-lg">Läs mer om vår stuga &amp; verksamhet</a>
      </div>
    </div>
    <_JSXStyle styleId="slideWrapper" css={`
      div.slideWrapper {
        color: white; 
        width: 100%; 
        height: calc(100% - 113px); 
        overflow: hidden;
        position: absolute;
        text-align: center; 
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
      }
    `} />
    <_JSXStyle styleId="innerCoverText" css={`
      div.innerCoverText {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);"
      }
    `} />
  </Layout>
);
