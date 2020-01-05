import React, { Component } from 'react'
import { Container, Row} from 'react-bootstrap'
import UserForm from './UserForm'
import {Route, withRouter} from 'react-router-dom'
import DataWall from './DataWall'

const path = 'DisplayPost';

class Main extends Component {

    // object that will be passed to our DataWall
    reddit_object = {
        new_url: 'https://www.reddit.com/r/aww',
        new_subreddit: 'aww',
    }
    
    addData(data_obj){
        // change the data of our object that we will pass as prop to our DataWall
        this.reddit_object.new_url =  data_obj.url;
        this.reddit_object.new_subreddit = data_obj.subreddit;

        this.nextPath(path); // change the path that will send the user to the nect page
    }

    // function that handles request to change path
    nextPath(localPath) {
        this.props.history.push(localPath);
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
                            <Row><UserForm handleUserData={(user_input_reddit_obj) =>{
                                this.addData(user_input_reddit_obj)
                            }}></UserForm></Row>
                        </Container>
                )}/>
                
                <Route path="/DisplayPost" render={({history}) => (
                        <Container>
                            <DataWall redditObject={this.reddit_object}/>
                        </Container>
                )}/>
                    
                
            </Container>
        )
    }
}

export default withRouter(Main)