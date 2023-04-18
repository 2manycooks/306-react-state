import React, { Component } from 'react'



export default class Moodtracker extends Component {

    state = {
        name: "Gabe",
        height: 10000000000,
        moodPoints: 1,
        property: this.props.prop
    }

    

    increaseMood = () => {
        console.log('Increasing Mood!')

        this.setState((prevState) => {
            return {
                moodPoints: prevState.moodPoints + 1,
                name: prevState.name + "e"
            }
        })
    }

    handleIncreaseToTen = () => {
        this.setState(() => {
            return {
                moodPoints: 10
            }
        })
    }

    handleCalmDown = () => {
        this.setState((prevState) => {
            return {
                moodPoints: prevState.moodPoints - 1,
                name: "Gabe"
            }
        })
    }

    render() {
        return(
            <div>
               <h1>{this.state.name}</h1>
               <h2>They are {this.state.moodPoints} on a scale of 1-10 happiness</h2>
               <button onClick={this.increaseMood}>Happiness Up!</button>
               <button onClick={this.handleIncreaseToTen}>MAXIMUM HAPPINESS</button>
               <button onClick={this.handleCalmDown}>Calm down</button>
            </div>
        )
    }
}