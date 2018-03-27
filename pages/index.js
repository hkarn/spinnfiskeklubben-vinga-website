import Layout from '../components/MyLayout';
import Head from 'next/head';
import _JSXStyle from 'styled-jsx/style';
import Slide from '../components/Slide';
import Link from 'next/link';

const slides = [
  'photos/view.jpg',
  'photos/view2.jpg',
  'photos/view3.jpg',
  'photos/view4.jpg'
];

export default () => (
  <Layout>
    <Head><title>Spinnfiskeklubben Vinga - Hem</title></Head>
    <Slide slides={slides} width="100%" height="calc(100% - 105px)" duration={7500} delay={8000} />

    <div className="innerCoverText text-center text-white">
      <h1 style={{textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Välkommen till Rävholmen</h1>
      <Link href="/about"><a className="btn btn-info btn-lg">Läs mer om vår stuga &amp; verksamhet &gt;</a></Link>
    </div>
    <_JSXStyle styleId="innerCoverText" css={`
      div.innerCoverText {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1002;
      }
    `} />
  </Layout>
);
