import React, { Component } from "react";
import ReactDom from "react-dom";

class Form extends Component {

    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;

        this.setState(() => {
            return {
                value
            };
        });
    }

    render() {
        return (
            <form>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDom.render(<Form/>,wrapper) :false;