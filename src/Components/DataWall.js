import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Post from './Post'

let head ="...Loading" // default prompt

class DataWall extends Component {
    

    constructor(){
    // state that will be modified based on props passed
    super()
        this.state = ({
            jsonData: true,
            url: "",
            subred:"r/"
        })

}

// this function will fetch our reddit data
    async fetchObj(){
        let fetched_obj = []
        let URL = this.props.suburl
        console.log(URL)
        // fetch data from API by the URL we constructed
        try {
            const response = await fetch(URL) // creates a response from the URL
            const reddit_data = await response.json() // grab the json file of the respons

    
            console.log("In fetchedObj")
            console.log(reddit_data.data.children) // log the child object from json that our data is in
            
            //fetched_obj = reddit_data.data.children // we have to object
            // pass in fetched_obj as prop to the data wall so we can access its child content like title and img
            //fetched_obj.map((index) =>  console.log(index.data.title)) // this gets the post title
            //fetched_obj.map((index) => console.log(index.data.url)) // this gets the post img
            
        }
        catch(E) {
            console.log(E); // output error
        }
    }

    componentDidMount(){

    }
    render(){
        
        console.log("We are in the DataWall")
    
        console.log(this.props.sub)   // ERROR HERE !!! Props are not recieved correctly
        // if we have json data passed in as prop then we can render posts
        if(this.state.jsonData){
            head = this.state.subred
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