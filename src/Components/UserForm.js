import React, { Component } from 'react';
import { Container, Row, Col, Button, Form} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const API = "https://www.reddit.com/r/"

class UserForm extends Component {

    // this is the object we will pass back to the Main page
    data_obj = {
        subreddit: "",
        url: "",
    }

    // this function will fetch the user input and set the state 
    getUserData = (event) => {
        // change the state so that we can add it to the url
        this.setState({
                subreddit: event.target.value,
        }
        );
    }

    // this function will push route to /DisplayPost
    nextPath(path) {
        this.props.history.push(path);
    }

    // this function will handle the event when the button is clicked
    onFetchedState = async (e) =>{
        let URL = `${API}${this.state.subreddit}${".json"}` // concat our URL we want to hit
        let subred = this.state.subreddit
        
        this.data_obj.subreddit = subred; // set our objects subreddit value
        this.data_obj.url = URL;    // set our objects url value

        this.props.onGrabbedData(this.data_obj) // pass our object back to Main
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
                        <Button onClick={this.onFetchedState, () => this.nextPath('/DisplayPost')} className="btn" variant="primary" size="lg" block>
                            Search
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default withRouter(UserForm);