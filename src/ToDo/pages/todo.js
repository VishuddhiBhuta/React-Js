import React from 'react'
import ToDoList from '../components/ToDoList'
import './todo.css'

/**
 * Parent 
 *      App
 */
export default class ToDo extends React.Component {
    state = {
        inputText: "",
        messages: [],
        isEditEnabled: false,
        editIndex: -1
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // Add Todos
    addMessages = () => {
        let addMessageText = {
            inputText: this.state.inputText
        }
        /**
         * format {inputText:"Enetered text followed here"}
         */
        this.setState({
            messages: [addMessageText, ...this.state.messages],
            inputText: ""
        });
    }

    // Remove Todos
    removeMessages = (removeIndex) => {
        let filteredMessages = this.state.messages.filter((message, index) => (
            index !== removeIndex
        ));

        this.setState({
            messages: filteredMessages
        })

        console.log(filteredMessages)
    }

    // Edit Todos
    editMessages = (editIndex) => {
        this.setState({
            inputText: this.state.messages[editIndex].inputText,
            isEditEnabled: true,
            editIndex: editIndex
        });
        console.log(editIndex)
    }

    //Update Edited Todos
    updateMessages = () => {
        let newMessages = [...this.state.messages]
        let updatedMessageText = {
            inputText: this.state.inputText
        }

        newMessages[this.state.editIndex] = updatedMessageText;

        console.log(newMessages, "++", updatedMessageText, "++", this.state.editIndex);

        this.setState({
            messages: newMessages,
            isEditEnabled: false,
            inputText: ""
        });
    }


    // Render the main structure of ToDo
    render() {
        return (
            <div className="todo-wrapper">
                <h3>Here's the today's ToDo List</h3>
                <div className="form-wrapper">
                    <input type="text" className="form-control" placeholder="Enter items here.." value={this.state.inputText} name="inputText" onChange={this.handleChange} onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            if (this.state.isEditEnabled) {
                                this.updateMessages()
                            } else {
                                this.addMessages()
                            }
                        }
                    }} />
                    <button type="submit" className="btn-primary" onClick={() => {
                        if (this.state.isEditEnabled) {
                            this.updateMessages()
                        } else {
                            this.addMessages()
                        }
                    }}>
                        {/* Condition for the button to change its text */}
                        {this.state.isEditEnabled ? "Update Items" : "Add Items"}
                    </button>
                </div>
                <ToDoList
                    data={this.state.messages}
                    remove={this.removeMessages}
                    edit={this.editMessages}
                    update={this.updateMessages} />
            </div>
        )
    }
}