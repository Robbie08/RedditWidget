import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Post from './Post'

let head ='...Loading'; // default prompt


class DataWall extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
            reddit_obj_url: '',
            reddit_obj_sub: '',
        };
    }
    

// this function will fetch our reddit data
    async fetchObj(){
        let fetched_obj = [];
        let URL = this.props.suburl;
        console.log(URL);
        // fetch data from API by the URL we constructed
        try {
            const response = await fetch(URL); // creates a response from the URL
            const reddit_data = await response.json(); // grab the json file of the respons

    
            console.log('In fetchedObj');
            console.log(reddit_data.data.children); // log the child object from json that our data is in
            
            
            //fetched_obj = reddit_data.data.children // we have to object
            // pass in fetched_obj as prop to the data wall so we can access its child content like title and img
            //fetched_obj.map((index) =>  console.log(index.data.title)) // this gets the post title
            //fetched_obj.map((index) => console.log(index.data.url)) // this gets the post img
            
        }
        catch(E) {
            console.log(E); // output error
        }
    }

    // if the compoment mounted then update the state
    componentDidMount(){
        this.setState({
            mounted: true,
            reddit_obj_url: this.props.redditObject.new_url,
            reddit_obj_sub: this.props.redditObject.new_subreddit,
        });
    }


    render(){

        // if we have json data passed in as prop then we can render posts
        if(this.state.mounted){
            head = `${'r/'}${this.state.reddit_obj_sub}`;
            return(
                <Container>
                    <h1>{head}</h1>
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