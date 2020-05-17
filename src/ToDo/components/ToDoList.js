import React from 'react'
import './ToDoList.css'

/**
 * Parent 
 *      ToDo
 * Children
 *      ToDoList
 */
export default class ToDoList extends React.Component {
    render() {
        return (
            this.props.data.map((messageText, index) => {
                return (
                    <div className="todolist-item" key={messageText.inputText + index}>

                        {/* Messages */}
                        {messageText.inputText}

                        <div className="action-buttons">
                            {/* Edit Button */}
                            <button
                                className="edit-btn"
                                onClick={() => { this.props.edit(index) }}>Edit Item</button>
                            {/* Remove Button */}
                            <button
                                className="remove-btn"
                                onClick={() => { this.props.remove(index) }}>Remove Item</button>
                        </div>
                    </div>
                )
            })
        )
    }
}