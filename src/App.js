import React, { Component } from "react";

import "./App.css";
import BeerTypes from "./BeerTypes";
import QueueCounter from "./QueueCounter";
import Bartenders from "./Bartenders";
const FooBar = window.FooBar;
class App extends Component {
  /**/
  state = {
    bar: JSON.parse(FooBar.getData())
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        bar: JSON.parse(FooBar.getData())
      });
    }, 10000);
  }
  render() {
    const beerType = this.state.bar.beertypes.map((beer, i) => {
      return (
        <BeerTypes key={i}
          title={beer.name}
          id={beer.id}
        />
      );
    });
    const Workers = this.state.bar.bartenders.map((bartender, i) => {
      return (
        <Bartenders key={i}
          name={bartender.name}
          status={bartender.status}
          details={bartender.statusDetail}
        />
      );
    });
    return <main>

      <section className="component">
        <QueueCounter queue={this.state.bar.queue} />
      </section>

      <section className="component">
        <h2>We serve these beers today: </h2>
        {beerType}
      </section>


      <section className="component">
        <h2>Bartenders på arbejde:</h2>
        {Workers}
      </section>
    </main>;
  }

}

export default App;
