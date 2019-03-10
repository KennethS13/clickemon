import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score});
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! Play again? \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
    
  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1});
          this.state.cards.sort(() => Math.random() - 0.5)
            if(this.state.score === 11) {
              this.setState({highscore: this.state.score +1});
              this.setState({score: 0});
              this.state.cards.forEach(card => {
                card.count = 0;
              });
              alert(`Yay, you won! :) \nscore: ${this.state.score +1}`);
            }
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Clickemon!!</h2>
          <h2 className="App-title">Gotta Click em All!!</h2>
        </header>
        <div className="App-intro">
          <strong>Click on an image to earn points, but don't click on any, more than once!</strong>
          <p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.highscore}</strong></p>
          {/* <p className="message"><strong>{this.state.message}</strong></p> */}
        </div>
        <Wrapper>

          {this.state.cards.map(card => (
            <Card
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">&copy;KennethS - Clickemon - <a href="https://github.com/KennethS13/clickemon" target="_blank" rel= "GitHub Repo">GitHub Repo</a> - React app.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
