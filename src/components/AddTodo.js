import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Addtodo extends Component {
    state = {
        title: ''
    }

    onChange=(e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit =(e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <div className="container">
            <div className="row">
               <div className="col-lg-12 px-0">
                <form onSubmit={this.onSubmit} className="d-flex">
                    <input type="text" name="title" placeholder="Add Todo " style={{flex: '10'}} value={this.state.title} onChange={this.onChange}/>
                    <input type="submit" value="Submit" className="btn btn-secondary" style={{flex: '1'}} />
                </form>
               </div> 
            </div>
                
            </div>
           
        )
    }
}

Addtodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default Addtodo
