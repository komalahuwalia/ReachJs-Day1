import React from 'react'

export default class TaskList extends React.Component{

    constructor(props){
        super(props);

    }


    renderList(tasks){
        return tasks.map(function(listItem){
            return <li>{listItem}</li>;
        })
    }

    render(){
        return (
            <div id="todoList">
                <ul>
                    {this.renderList(this.props.tasks)}
                </ul>
            </div>
        );
    }
}
