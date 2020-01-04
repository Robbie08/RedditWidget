import React, { Component } from 'react'
import {Card, Container} from 'react-bootstrap'

class Post extends Component {

    render() {
        return (
            <Container>
                <Card className="card">
                    <Card.Body>
                        <Card.Text>
                            Post title will appear here.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="displayCard">
                        <Card.Img className="img"variant="bottom" src="https://i.redd.it/prtq87oc0l741.jpg" />  
                    </Card.Body>
                </Card>
                    <br />
            </Container>
        )
    }
}

export default Post