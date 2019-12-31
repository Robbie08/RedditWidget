import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Post from './Post'

let prompt ="...Loading" // default prompt

class DataWall extends Component {
    
    // state that will be modified based on props passed
    datastate = {
        jsonData: true,
    }

    render(){
        // if we have json data passed in as prop then we can render posts
        if(this.datastate.jsonData){
            prompt = "r/aww"
            return(
                <Container>
                    <h1>{prompt}</h1>
                    <Post></Post>
                    <Post></Post>
                </Container>
            )
        }
        else {
            return(
                <Container>
                    <h1>{prompt}</h1>
                </Container>
            )
        }

    }
}

export default DataWall