import React from 'react';

import {Link} from 'react-router-dom';

class MainNavigation extends React.Component {
  render() {
    return (
      <div>
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
      </div>
    );
  }
}

export default MainNavigation;












// import {
//   BrowserRouter as Router,
//   Route,
//   NavLink
// } from 'react-router-dom';

// import Home from "./pages/Home"
// import About from "./pages/About"

// // import { Navbar, Jumbotron, Button } from 'react-bootstrap';

// const Links = () => (
//   <nav className="nav navbar navbar-inverse">
//     <NavLink  to="/" >Home</NavLink>
//     <NavLink to="/about">About</NavLink>
//   </nav>
// )


// class NavMenu extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Links />
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default NavMenu;
