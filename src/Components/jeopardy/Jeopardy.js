import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from '../../pages/jeopardy/JeopardyDisplay';

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      userAnswer: ""
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }

  handleChange = (event) => {
    this.setState ({
      userAnswer: event.target.value
    })
  }

  handleAnswer = () => {
    if (this.state.userAnswer === this.state.data.answer) {
      this.setState ((state) => ({
        score: state.score += this.state.data.value,
        userAnswer: ""
      }))
    } else {
      this.setState((state) => ({
        score: state.score -= this.state.data.value,
        userAnswer: ""
    }))
  }
}


      // formData[event.target.name] = event.target.value
      // this.setState({
      //     formData

      // })

  handleSubmit = (event) => {
      event.preventDefault();
      console.log("handleSubmit")
      if (this.state.formData.answer === this.state.date.answer) {
          console.log("match")
          this.setState( (state, props ) => ({
              score: state.score + state.data.value,
              formData: {
                  answer: ""
              }
          }) )
      } else { 
          console.log("noMatch")
          this.setState( (state, props) => ({
              score: state.score - state.data.value,
              formData: {
                  answer: ""
              }
          }) )

      }
      this.getNewQuestion();
  }


  //when the component mounts, get a the first question
componentDidMount() {
  this.getNewQuestion();
  }
  //display the results on the screen
  render() {
      console.log(this.state.data)
      if (!this.state.data.id) {
        return (
          <div>
            Loading
          </div>
        )
      }
      console.log(this.state.data)
      let category = this.state.data.category && this.state.data.category.title;
    return (
      <JeopardyDisplay
        question={this.state.data.question}
        category={category}
        value={this.state.data.value}
        score={this.state.score}
        userAnswer={this.state.userAnswer}
        handleChange={this.handleChange}
        handleAnswer={this.handleAnswer}
      />
    );
  }
}
export default Jeopardy;