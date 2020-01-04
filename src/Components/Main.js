import React, { Component } from 'react'
import { Container, Row} from 'react-bootstrap'
import UserForm from './UserForm'
import {Route} from 'react-router-dom'
import DataWall from './DataWall'


class Main extends Component {

    constructor(){
        super()
        this.state = {
            new_url: "",
            new_subreddit:"",
        } 
    }
    
    addData(data_obj){
        console.log("addData----")
        console.log(data_obj.url)
        console.log(data_obj.subreddit)

        this.setState=({
            new_url: data_obj.url,
            new_subreddit: data_obj.subreddit
        })
    }

    render(){
        return(
            <Container>
                <Route exact path ="/" render={() => (
                        <Container>
                            <Row><h1>The Reddit Widget</h1></Row>
                            <Row>
                                <h3>This widget will grab the top 10 posts from your favorite subreddit</h3>
                            </Row>
                            <Row><UserForm onGrabbedData={(grabbedData) =>{
                                this.addData(grabbedData)
                            }}></UserForm></Row>
                        </Container>
                )}/>
                
                <Route path="/DisplayPost" render={({history}) => (
                        <Container>
                            <DataWall sub={this.state.new_subreddit}/> {/* mistake here !!!! cant recieve props correctly */}
                        </Container>
                )}/>
                    
                
            </Container>
        )
    }
}

export default Main