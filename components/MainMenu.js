import Link from 'next/link';

const MainMenu = ({collapsed}) => (

  <ul className={collapsed + ' align-items-center'}>
    {/* <li className="nav-item active">
      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    </li> */}
    <li className="nav-item">
      <a className="btn btn-outline-dark text-uppercase custom-responsive-text text-nowrap py-1 px-2 mx-2 my-3" href="#">Om föreningen</a>
    </li>
    <li className="nav-item">
      <a className="btn btn-outline-dark text-uppercase custom-responsive-text text-nowrap py-1 px-2 mx-3 my-3" href="#">Medlemmar</a>
    </li>
    <li className="nav-item">
      <img className="nav-link sponsorhuset p-1 ml-1 mt-3 mb-4" src="./static/images/sponsorhuset.gif" />
    </li>
  </ul>
);

export default MainMenu;
