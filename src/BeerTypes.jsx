import React from "react";
export default class BeerTypes extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.title}</li>
        </ul>
      </div>
    );
  }
}
