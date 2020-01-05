import React, { Component } from 'react';
import { Container, Row, Col, Button, Form} from 'react-bootstrap';

const API = 'https://www.reddit.com/r/'; // API Link

class UserForm extends Component {

    // this is the object we will pass back to the Main page
    data_obj = {
        subreddit: '',
        url: '',
    }

    // this function will fetch the user input and set the state 
    getUserInput = (event) => {
        
        let user_input = event.target.value.toLowerCase(); // change to lowercase because API only accepts lowecase
        
        // change the state so that we can add it to the url
        this.setState({
                subreddit: user_input,
        }
        );
    }

    // this function will handle the event when the button is clicked
    onButtonClick = () =>{
        let URL = `${API}${this.state.subreddit}${'.json'}` ; // concat our URL we want to hit
        let subreddit = this.state.subreddit;
        
        this.data_obj.subreddit = subreddit; // set our objects subreddit value
        this.data_obj.url = URL;    // set our objects url value

        this.props.handleUserData(this.data_obj); // pass our object back to Main
    }

    render(){
        return(
            <Container>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontal">
                        <Form.Label column sm={{span: 0, offset:2}}>
                        Subreddit: r/
                        </Form.Label>
                        <Col sm={{span:7, offset: 0}}>
                        <Form.Control onChange={this.getUserInput} type="text" placeholder="Try: aww" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Button onClick={this.onButtonClick} className="btn" variant="primary" size="lg" block>
                            Search
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default UserForm;