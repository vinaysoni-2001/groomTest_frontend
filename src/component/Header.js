import React from "react";
import { Button, Container, ListGroup, Row } from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";
import '../assets/css/style.css';
import { TfiMenu } from "react-icons/tfi";
import { IoWallet } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { FaHistory } from "react-icons/fa";

const Header = () => {
    return (
        <>
        <header className="main-header px5 container-fluid bg-dark">
                <Row className="justify-content-between align-items-center">
                    <div className="w-auto">logo</div>
                    <div className="w-auto">
                        <Button className="menu-hb" 
                        data-bs-toggle="offcanvas" data-bs-target="#rightSideMenu">
                        <TfiMenu />
                        </Button>
                    </div>
                </Row>
        </header>

        {/* Menu */}

        <div class="offcanvas offcanvas-end bg-dark rightSideMenuBar" tabindex="-1" id="rightSideMenu" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ListGroup as="ul">
        <ListGroup.Item as="li">
           <a href="#"><IoWallet /> Deposit</a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
        <a href="#"><GiWallet /> Withdrawal</a></ListGroup.Item>
        <ListGroup.Item as="li">
        <a href="#"><FaHistory /> Game Transition</a></ListGroup.Item>
    </ListGroup>
  </div>
</div>

        {/* Menu End! */}
        </>
    )
}

export default Header;