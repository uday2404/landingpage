import React from 'react';
import {CustomInput, Input, Form, Button, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            username:'',
            password:'',
            isValidate:0
        };
      this.handleValidate=this.handleValidate.bind(this);
      this.handleChange=this.handleChange.bind(this);
    };

    handleChange(event) {

        this.setState({
          [event.target.name]: event.target.value,
           
        });

    }

    handleValidate(username,password){
        
        if(username=="uday" && password=="1234")
        {
            this.setState({
                isValidate:1
            });
        }
    }

    render(){
        
         

        return(
            <React.Fragment>
                <div className="background">
                    <div className="container">
                        <div className="row m-1">
                            <div className="col-md-5 offset-md-7 loginbox">
                                <div className="container" style={{padding:'40px'}}>
                                    <h5 align="center">Sign in to your account</h5>
                                    <div className="row">
                                        <Form>    
                                            <Row style={{padding:'10px'}}>
                                                <Col md={6}>
                                                <CustomInput    label="Personal" 
                                                                id="chk1" 
                                                                name="chk" 
                                                                className="form ml-2" 
                                                                type="radio"
                                                />
                                                </Col>
                                                <Col md={6}>
                                                <CustomInput    label="Commercial" 
                                                                id="chk2" 
                                                                name="chk" 
                                                                className="form ml-2" 
                                                                type="radio"
                                                />
                                                </Col>
                                            </Row>    
                                            <Row style={{padding:'15px'}}>
                                                <Input  id="username" 
                                                        name="username" 
                                                        placeholder="Username" 
                                                        type="text"  
                                                        className="input" 
                                                        color="primary"
                                                        value={this.state.username}
                                                        onChange={this.handleChange}        
                                                />
                                                <Input  id="password" 
                                                        name="password" 
                                                        type="password" 
                                                        placeholder="Password" 
                                                        className="mt-3"
                                                        value={this.state.password}
                                                        onChange={this.handleChange}          
                                                />
                                                <CustomInput    className="mt-3" 
                                                                label="Keep me signed in" 
                                                                id="checkboox" 
                                                                name="checkbox" 
                                                                type="checkbox" 
                                                                
                                                />                      
                                            </Row>
                                            <Link to={`/Home/${this.state.isValidate}`} >
                                                <Button className="mt-1" 
                                                        color="danger"
                                                        onPointerEnter={()=>this.handleValidate(this.state.username,this.state.password)} 
                                                        type="submit" 
                                                        style={{width:'100%'}} >SIGN IN</Button>            
                                            </Link>    
                                        </Form> 
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Login;


