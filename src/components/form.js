import React from "react";


export default class App extends React.Component{
  constructor(){
    super();
    this.state={
           form:"login"
    }
this.toggle={
   login:"register",
   register:"login"
}

}
 onSubmit=(e) =>{
    e.preventDefault();
  }
  onClick=()=>{
    this.setState({form:this.toggle[this.state.form]})
  }
  render(){
    return(
            <div>
            <h1> Login And Register Form </h1>
              <div className="container">
        <div style={{transform: `translate(${this.state.form === 'login' ? 0 : 250}px, 0px)`}} className="form-div">
          <form onSubmit={this.onSubmit}>
            <input placeholder="Email" type="text" />
            <br/>
            <input placeholder="Password" type="password" />
            {this.state.form === 'login' ? '': <input placeholder="Re-typed password" type="password" />}
            <button className="button-primary">Submit</button>
          </form>
        </div>
        <div style={{transform: `translate(${this.state.form === 'login' ? 0 : -250}px, 0px)`}} className="button-div">
          <p>{this.state.form === 'login' ? 'Do not have an account?' : 'Already a member?'}</p>
          <button onClick={this.onClick.bind(this)}>{this.toggle[this.state.form]}</button>
        </div>
      </div>

            </div>

      )
  }
}
