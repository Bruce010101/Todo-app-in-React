import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {FontawesomeIcon} from "@fontawesome/react-fontawesome";
export class Todoitem extends Component {
    getStyle = () => {
        return{
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

  

    render() {
        //const-reussable-component-dry destructuring method
        const { id, title } = this.props.todo;
        return (
            <div className="" style={this.getStyle()}>
              <div className="row py-3">
                <div className="col-4 col-lg-4 pl-4 my-auto">
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> { '' }
                </div>
                    <div className="col-4 col-lg-4 text-center my-auto">
                        <p className="paragraph-text mb-0">
                        { title }
                        </p>
                    </div>
                        <div className="col-4 col-lg-4 text-right pr-4 my-auto">
                            <button onClick={this.props.delTodo.bind(this, id)} className="btn btn-primary justify-content-end">X</button>
                        </div>
              </div>
            </div>
            
        )
    }
}

//Prop-types
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todoitem
//className="border-bottom"