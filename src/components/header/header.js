import React, { PureComponent } from 'react';
import './header.css';
import NavMenu from './menu/nav-menu';

class Header extends PureComponent {
  render() {
    return (
      <React.Fragment>

        <div className="container-fluid bg-light py-2 pp">
          <div className="container">

          <NavMenu></NavMenu>
          
            {/* {this.props.children}
            <input value={this.props.searchValue}></input> */}
          </div>


        </div>


      </React.Fragment>
    );
  }
}

export default Header;
