import React from 'react';
import {Card, Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Media, CardImg, CardImgOverlay, Row, Col, Collapse, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Button} from 'reactstrap';
import {NavLink} from 'react-router-dom'; 

class Home extends React.Component{

    constructor(props){
        super(props);
    
        this.state={
            isNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this);
    };

    toggleNav()
    {
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    };

    render(){
        return(
            <React.Fragment>
                <Navbar expand="md" light color="light" className="fixed-top nav">
                    <NavbarBrand href="/" style={{color:'green'}} ><strong>OPTIMA</strong> <span style={{color:'black', 'font-style':'italic','font-size':'15px'}}>Pay Less, Save More</span></NavbarBrand>
                <NavbarToggler onClick={this.toggleNav}/>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/Home">
                                <img src="/not.png" alt="Notifications" width="100%" height="100%" style={{'border-right':'1px solid black', 'padding-right':'40px'}} />
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-4">
                            <NavLink to="/">
                                <img src="/img-user.png" alt="User" width="100%" height="100%" />
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-4">
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Alice
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                    Option 2
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem className="ml-4 mt-2">
                            <NavLink to="/Home" >
                                <i style={{'text-decoration':'none'}} class="fa fa-sign-out" aria-hidden="true"></i>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>

                <div className="sidenav">
                    <div className="container">
                        <div className="row justify-content-center align-self-center side1">
                            <img src="/ichome.png" alt="Home" className="mt-3" width="45%" style={{margin:'20px'}}/>
                        </div><br/><br/>
                        <div className="row justify-content-center side">
                            <img src="/icwallet.png" alt="Wallet" className="mt-3" width="45%" style={{margin:'20px'}}/>
                        </div><br/><br/>
                        <div className="row justify-content-center side">
                            <img src="/icwallet.png" alt="Report" className="mt-3" width="45%" style={{margin:'20px'}}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid home">
                    <div className="homerow">
                        <div className="row" >
                            <div className="col-12">
                                <h4 className="mb-0">My financials</h4>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-10 myback">
                                <div className="container backdata" >
                                    <div className="row">
                                        <div className="col-12 col-md-3" style={{'border-right':'1px solid rgb(200, 199, 199)'}}>
                                            <p className="mb-0">Debit Accounts</p>
                                            <h3>3</h3>
                                            <p className="mb-0 mt-3">Credit Accounts</p>
                                            <h3>3</h3>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="ml-5">
                                            <p className="mb-0">Debit Balance</p>
                                            <h3>&pound; 12500</h3>
                                            <p className="mb-0 mt-3">Credit Outstanding</p>
                                            <h3>&pound; 3800</h3>
                                            </div>
                                        </div>  
                                        <div className="col-12 col-md-5">
                                            <p className="mb-0">Looking for best option to maximise your savings and optimise your expenses?</p>
                                            <button className="mt-2 button1">YES <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                        </div> 
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4 box">
                                <div className="m-2">
                                    <Row>
                                        <Col md={10}>
                                        <h5>Debit accounts</h5>
                                        </Col>
                                        <Col md={2} style={{color:'green'}}>
                                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={3}>
                                            <img width="120%" src="/card_img2.jpg" alt="Card"/>
                                        </Col>
                                        <Col md={4} className="ml-2">
                                            <p className="mb-0">Halifax</p>            
                                            <b>0.2% AER</b>
                                        </Col>
                                        <Col md={2} >
                                            <div style={{'border-right':'1px solid gray', padding:'5px'}}>
                                                <b >PCA</b>
                                            </div>
                                        </Col>
                                        <Col md={2} style={{padding:'5px'}}>
                                            $4000
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={3}>
                                            <img width="120%" src="/card_img2.jpg" alt="Card"/>
                                        </Col>
                                        <Col md={4} className="ml-2">
                                            <p className="mb-0">Halifax</p>            
                                            <b>0.2% AER</b>
                                        </Col>
                                        <Col md={2} >
                                            <div style={{'border-right':'1px solid gray', padding:'10px'}}>
                                                <b >SB</b>
                                            </div>
                                        </Col>
                                        <Col md={1}  style={{padding:'10px'}}>
                                            $6000
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={3}>
                                            <img width="120%" src="/card_img2.jpg" alt="Card"/>
                                        </Col>
                                        <Col md={4} className="ml-2">
                                            <p className="mb-0">Halifax</p>            
                                            <b>0.2% AER</b>
                                        </Col>
                                        <Col md={3} >
                                            <div style={{'border-right':'1px solid gray', padding:'10px'}}>
                                                <b >SB</b>
                                            </div>
                                        </Col>
                                        <Col md={1} className="ml-0" style={{padding:'10px'}}>
                                            $2500
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="col-4 box ml-3">
                            <div className="m-2">
                                    <Row>
                                        <Col md={10}>
                                        <h5>Credit accounts</h5>
                                        </Col>
                                        <Col md={2} style={{color:'green'}}>
                                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={3}>
                                            <img width="120%" src="/card_img2.jpg" alt="Card"/>
                                        </Col>
                                        <Col md={4} className="ml-2">
                                            <p className="mb-0">Halifax</p>            
                                            <b>0.2% AER</b>
                                        </Col>
                                        <Col md={2} >
                                            <div style={{'border-right':'1px solid gray', padding:'10px'}}>
                                                <b className="mr-2">PCA</b>
                                            </div>
                                        </Col>
                                        <Col md={2} style={{padding:'10px'}}>
                                            $4000
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={3}>
                                            <img width="120%" src="/card_img2.jpg" alt="Card"/>
                                        </Col>
                                        <Col md={4} className="ml-2">
                                            <p className="mb-0">Halifax</p>            
                                            <b>0.2% AER</b>
                                        </Col>
                                        <Col md={2} >
                                            <div style={{'border-right':'1px solid gray', padding:'10px'}}>
                                                <b className="mr-2">SB</b>
                                            </div>
                                        </Col>
                                        <Col md={2} style={{padding:'10px'}}>
                                            $6000
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={3}>
                                            <img width="120%" src="/card_img2.jpg" alt="Card"/>
                                        </Col>
                                        <Col md={4} className="ml-2">
                                            <p className="mb-0">Halifax</p>            
                                            <b>0.2% AER</b>
                                        </Col>
                                        <Col md={2} >
                                            <div style={{'border-right':'1px solid gray', padding:'10px'}}>
                                                <b className="mr-2">SB</b>
                                            </div>
                                        </Col>
                                        <Col md={2} style={{padding:'10px'}}>
                                            $2500
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                       
                                            <button className="mt-3 button2">OPTIMIZE <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                        
                                    </Row>
                                </div>
                            </div>
                            <div className="col-3 ml-5">
                                   <Card>
                                       <CardImg src="/book2.jpg" width="100%" height="300px" />
                                       <CardImgOverlay>
                                            
                                       </CardImgOverlay>
                                   </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Home;