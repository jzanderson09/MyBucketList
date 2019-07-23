import React, { Component } from 'react';

import './LandingPage.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ 
            [event.target.name]: event.target.value 
        });
    }

    render() {
        return (
            <div className='LandingPage-container'>
                <form className='input-form' 
                    onSubmit={() => this.props.login(this.state.username, this.state.password)}>
                    <input
                        className='text-fields'
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.changeHandler}
                    />
                    <input
                        className='text-fields'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.changeHandler}
                    />
                    <button onClick=
                        {() => this.props.login(this.state.username, this.state.password)}>
                        Sign In
                    </button>
                </form>
                <div className='greeting-text-container'>
                    <h1>Welcome to Bucket List!</h1>
                    <p>When it comes to tracking your life goals,</p>
                    <p>we've got you've covered.</p>
                    <p>Past, present and future.</p>
                </div>
            </div>
        );
    }
}

export default LandingPage;