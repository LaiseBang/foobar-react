import React from "react";
export default class Bartenders extends React.Component {
    render() {
        return (
            <div>
                <p> {this.props.name} <br />
                    {this.props.status} <br />
                    {this.props.details}</p>
            </div>
        );
    }
}