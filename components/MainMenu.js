import Link from 'next/link';

const MainMenu = ({collapsed}) => (

  <ul className={collapsed + ' align-items-center'}>
    <li className="nav-item">
      <Link href="/about"><a className="btn btn-outline-dark text-uppercase custom-responsive-text text-nowrap py-1 px-2 mx-2 my-3" href="#">Om föreningen</a></Link>
    </li>
    <li className="nav-item">
      <Link href="/members"><a className="btn btn-outline-dark text-uppercase custom-responsive-text text-nowrap py-1 px-2 mx-3 my-3" href="#">Medlemmar</a></Link>
    </li>
    <li className="nav-item">
      <a href="https://www.sponsorhuset.se/vingaklubben/" target="_blank" className="m-0 p-0"><img className="nav-link sponsorhuset p-1 ml-1 mt-3 mb-4" src="/static/images/sponsorhuset.gif" /></a>
    </li>
  </ul>
);

export default MainMenu;
