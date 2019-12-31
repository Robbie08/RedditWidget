import React, { Component } from 'react'
import { Container, Row} from 'react-bootstrap'
import UserForm from './UserForm'
import {Route} from 'react-router-dom'
import DataWall from './DataWall'
class Main extends Component {


    formatData(props){

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
                            <Row><UserForm></UserForm></Row>
                        </Container>
                )}/>
                
                <Route path="/DisplayPost" render={({history}) => (
                        <Container>
                            <DataWall onFetchedData={(fetchedData) =>{
                                this.formatData(fetchedData)
                                history.push('/')
                            }}/>
                        </Container>
                )}/>
                    
                
            </Container>
        )
    }
}

export default Main