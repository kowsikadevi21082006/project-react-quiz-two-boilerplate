import React, { Component } from 'react'

// import { Component } from 'react'
import HomeComponent from './Components/HomeComponent'
import QuizComponent from './Components/QuizComponent'
import ResultComponent from './Components/ResultComponent'



export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       page:0
    }
  }

  pageUp=(pageNo)=>{
    this.setState(()=>{
        return{
            page: pageNo
        }
    })
 }

  render() {
    if(this.state.page===0){
      return (
        <HomeComponent pageProp={this.pageUp}/>
        )
    }
    else if(this.state.page===1){
      return (
        <QuizComponent pageProp={this.pageUp}/>
        )

    }
    else if(this.state.page===2){
      return (
        <ResultComponent pageProp={this.pageUp}/>
        )
    }


  }
}