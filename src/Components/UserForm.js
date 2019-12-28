import React, { Component } from 'react';
import { Container, Row, Col, Button, Form} from 'react-bootstrap';

const API = ""

class UserForm extends Component {

    // state for the URL
    state ={
        subreddit: "aww",
    }

    // this function will fetch the user input and set the state 
    getUserData = (event) => {
        // change the state so that we can add it to the url
        this.setState({
                subreddit: event.target.value 
        }
        );
    }

    // this function will handle the event when the button is clicked
    onFetchedState = async (e) =>{
        let URL = `${API}${this.state.subreddit}` // concat our URL we want to hit

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
                        <Form.Control onChange={this.getUserData} type="text" placeholder="Try: aww" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Button  onClick={this.onFetchedState} className="btn" variant="primary" size="lg" block>
                            Search
                        </Button>
                    </Form.Group>
                 </Form>
            </Container>
        )
    }
}

export default UserForm