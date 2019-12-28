import React, { Component } from 'react'
import { Container, Row} from 'react-bootstrap'
import UserForm from './UserForm'

class Main extends Component {
    render(){
        return(
            <Container>
                <Row><h1>The Reddit Widget</h1></Row>
                <Row>
                    <h3>This widget will grab the top 10 posts from your favorite rubreddit</h3>
                </Row>
                <Row>
                    <UserForm></UserForm>
                </Row>
            </Container>
        )
    }
}

export default Main