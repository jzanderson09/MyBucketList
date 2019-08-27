import React, { Component } from 'react';

import './UserPage.css';

const myBucketList = [
    {
        id: 0,
        task: 'Walk the dog',
        completed: false
    },
    {
        id: 1,
        task: 'Wash the dishes',
        completed: false
    },
    {
        id: 2,
        task: 'Mow the lawn',
        completed: false
    },
];

class UserPage extends Component {
    constructor() {
        super();
        this.state = {
            bucketItem: '',
            bucketList: myBucketList
        }
    }

    addBucketItem = event => {
        event.preventDefault();
        this.setState({ bucketList: [...this.state.bucketList, this.state.bucketItem] });
        this.setState({ bucketItem: '' });
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    complete = event => {
        const target = event;
        console.log(target);
        // const targetFound = this.state.bucketList.find(obj => obj.id === target.id);
        if (target.completed === false) {
            this.setState({ [target.completed]: true });
        }
        else {
            this.setState({ [target.completed]: false });
        }
    }

    //myArray.find(x => x.id === '45').foo;

    render() {
        return (
            <div className='UserPage-container'>
                <h1 className='greeting'>Welcome, Jake!</h1>
                <div className='bucketlist-container'>
                    <h3 className='bucket-header'>Your Bucket List:</h3>
                    <ul className='bucketlist'>
                        {this.state.bucketList.map(listObj => {
                            return (
                                <li 
                                    key={listObj.id}
                                    className='bucketlist-item'
                                    onClick={() => this.complete(listObj)}
                                >{listObj.task}</li>
                            );
                        })}
                    </ul>
                    <form onSubmit={this.addBucketItem}>
                            <input 
                                type='text'
                                name='bucketItem'
                                placeholder='I really need to...'
                                value={this.state.bucketItem}
                                onChange={this.changeHandler}
                            />
                            <button onClick={this.addBucketItem}>Add to Bucket</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UserPage;