import React from 'react';
import './Home.css';
import BannerThird from '../inner-component/banner-third-level';
class SignUp extends React.Component {

    
constructor(props){
    super(props);
    this.state={
       email: '',
       password: '',
       firstName: '',
       userName: '',
       error:{
           message: ''
       }
    }
}
Change = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
    
}
onSubmit=e =>{
    e.preventDefault();
    const data = {
        email: this.state.email,
            password: this.state.password,
            firstName: this.state.userName,
            userName: this.state.firstName,
      }

    fetch('http://localhost:3010/user', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        (response) => {
          console.log(response);
          return response.json();

        } // if the response is a JSON object
      ).then(
      success =>console.log(success) // Handle the success response object
    ).catch(function(error) {
      console.log('Request failed', error)
    });    
}

render() {
    return (
        <div>
            <div>
            <BannerThird title="Sign Up Form"/>
            </div>
        <div className="form-outer">
        <div className="container">
            <form className="form" required>
                <div className="field-wrapper">
                    <input
                        placeholder="Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={e => this.Change(e)}
                        required
                    />
                    <span className={`form-error ${this.state.firstNameError? 'is-active' : ''}`}>{this.state.firstNameError}</span>
                </div>
                <div className="field-wrapper">
                    <input
                        placeholder="user Name"
                        name="userName"
                        value={this.state.userName}
                        onChange={e => this.Change(e)}
                        required
                    />
                    <span className={`form-error ${this.state.userNameError? 'is-active' : ''}`}>{this.state.userNameError}</span>
                </div>
                <div className="field-wrapper">
                    <input placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={e => this.Change(e)}
                        required
                    />
                    <span className={`form-error ${this.state.emailError? 'is-active' : ''}`}>{this.state.emailError}</span>
                </div>
                <div className="field-wrapper">
                    <input placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.Change(e)}
                        required
                    />
                    <span className={`form-error ${this.state.passwordError? 'is-active' : ''}`}>{this.state.passwordError}</span>
                </div>
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
            </div>
        </div>
        </div>
    );
}
}

export default SignUp;
