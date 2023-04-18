import React, { Component } from 'react'



export default class Moodtracker extends Component {

    state = {
        name: "Gabe",
        moodPoints: 1,
    }

    

    increaseMood = () => {
        if (this.state.moodPoints < 10) {
            this.setState((prevState) => {
                return {
                    moodPoints: prevState.moodPoints + 1,
                }
            }
        )} else {
            this.setState(() => {
                return {
                    moodPoints: 1
                }
            })
        }
    }

    handleIncreaseToTen = () => {
        this.setState(() => {
            return {
                moodPoints: 10,
                height: 1000000000000
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