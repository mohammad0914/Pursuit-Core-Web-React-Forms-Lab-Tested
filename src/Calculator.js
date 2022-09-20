import React from "react";
class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            select: "sum",
            result: ""
        };

    }


    sum = (input) => {
        let total = 0;
        input.forEach(num => {
            total += num
        });

        return total;
    }

    average = (input) => {
        let average;
        average = this.sum(input) / input.length
        return average;
    }

    checkInput = (input) => {
        return input.every(num => {
            return typeof num == "number"
        })
    }

    changeResult = (text) => {
        this.setState({
            result: text
        });
    }


    handleFormSubmit = (event) => {
        let text = this.state.input.split(',');
        let func = this.state.select;
        text.map(element => parseInt(element));
        if (this.checkInput(text)) {
            switch (func) {
                case "sum":
                    this.changeResult(this.sum(text));
                    break;

                case "average":
                    this.changeResult(this.average(text));
                    break;

                default:
                    break;
            }
        }
        else {
            this.changeResult("Invalid input.")
        }

    }

    handleChangeInput = (event) => {
        const { value } = event.target;
        this.setState({
            input: value
        })

    }

    handleChangeSelect = (event) => {
        const { value } = event.target;
        this.setState({
            func: value
        })
    }

    render() {
        const { input, select, result } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>Enter each number in array</h1>
                <input value={input} id="text" onChange={this.handleChangeInput}></input>

                <select value={select} onChange={this.handleChangeSelect}>
                    <option value="sum">sum</option>
                    <option value="average">average</option>
                    <option value="mode">mode</option>
                </select>
                <button type="submit">Calculate</button>
                <span id="result">{result}</span>
            </form>
        );
    }

}
