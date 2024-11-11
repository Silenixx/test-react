import React from "react";

class Form extends React.Component {
    state = {
        firstName: "lukas",
        email : "lukas@gmail.fr",
    }

    handleInput = (event) => {
        // console.log(event.target.value);
        this.setState({
            
            [event.target.name]: event.target.value
        });
        
    }
        
    
    render() {
        console.log(this.state);
        return <div>
            firstName: {this.state.firstName}
            <p>
                <input name="firstName" type="text" onChange={this.handleInput}></input>
            </p>
            email: {this.state.email}
            <p>
                <input name="email" type="email" onChange={this.handleInput}></input>
            </p>
        </div>
    }

}

export default Form;