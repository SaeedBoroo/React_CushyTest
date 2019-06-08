import React, { PureComponent } from 'react';
import {Button} from 'react-bootstrap';

class NavMenu extends PureComponent {
  render() {
    return (<>

<style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>


      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="pill" href="#home">خانه</a>
          <Button variant="flat" size="xxl">
            flat button
          </Button>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="pill" href="#menu1">پیام ها</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="pill" href="#menu2">ارتباط با ما</a>
        </li>
      </ul>


    </>);
  }
}

export default NavMenu;
