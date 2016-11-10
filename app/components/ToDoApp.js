import React from 'react'
import TaskList from 'components/TaskList'

export default class ToDoApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            taskList : []
        }
    }

    addItem(e){
        e.preventDefault();
        this.setState({
            taskList : this.state.taskList.concat(this.refs.taskname.value)
        })

    }

    render(){
        return (
            <div>
            <form>
                <input ref="taskname" type="text" id="taskname"></input>
                <input type="submit" id="addTask" onClick={this.addItem.bind(this)}></input>
            </form>
                <TaskList tasks={this.state.taskList}></TaskList>
            </div>
        );
    }

}
