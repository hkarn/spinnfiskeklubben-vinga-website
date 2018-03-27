import Link from 'next/link';
import _JSXStyle from 'styled-jsx/style';
import MainMenu from './MainMenu';

const Header = () => (

  <div className="topWrapper container-fluid sticky-top">
    <nav className="navbar navbar-light bg-white py-0 pl-1 pr-2">
      <Link href="/">
        <a className="navbar-brand d-flex align-items-center m-0 p-0">
          <img className="inline-block p-2" src="/static/images/logo.jpg" alt="Spinnfiskeklubben Vinga Logo" title="Till startsidan" />
          <h2 className="topLogoText inline-block" title="Till startsidan">Spinnfiskeklubben Vinga</h2>
        </a>
      </Link>
      <div className="ml-auto d-none d-lg-block">
        <MainMenu collapsed="nav justify-content-end" />
      </div>
      <div className="btn-group d-lg-none ml-auto">
        <button className="navbar-toggler border-dark bg-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="dropdown dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <MainMenu collapsed="nav justify-content-center" />
        </div>
      </div>
    </nav>
    <_JSXStyle styleId="topWrapper" css={`
      div.topWrapper {
        width: 100%;
        height: 105px;
        background-color: #fff;
        padding: 0
      }
    `} />
    <_JSXStyle styleId="topLogoText" css={`
    h2.topLogoText {
      margin:  0 0 0 10px;
      display: inline-block;
      font-style: italic;
      }
    `} />
  </div>
);

export default Header;
