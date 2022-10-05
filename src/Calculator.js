import React from "react";
class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            select: "Sum",
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
        debugger
        return input.every(num => {
            return (typeof num) === "number"
        })
    }

    changeResult = (text) => {
        this.setState({
            result: text
        });
    }


    handleFormSubmit = (event) => {
        event.preventDefault();
        let text = this.state.input.split(',');
        let func = this.state.select;
       let input= text.map(element => parseInt(element));
     
            
            switch (func) {
                case "Sum":
                    this.changeResult(this.sum(input));
                    break;

                case "Average":
                    this.changeResult(this.average(input));
                    break;

                default:
                    break;
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
            select: value
        })
    }

    render() {
        const { input, select, result } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>Enter each number in array</h1>
                <input className="input" value={input} id="text" onChange={this.handleChangeInput}></input>

                <select className="selectBox" value={select} onChange={this.handleChangeSelect}>
                    <option value="Sum">sum</option>
                    <option value="Average">average</option>
                    <option value="Mode">mode</option>
                </select>
                <button className="calc_button" type="submit">Calculate</button>
                <br></br>
                <span id="result">{Number.isNaN(result)?"Invalid input.":select+": "+result}</span>
            </form>
        );
    }

}

export default Calculator
