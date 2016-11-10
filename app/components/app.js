import React from 'react'
import ToDoApp from 'components/ToDoApp'

export default  class App extends React.Component{

    render(){
        return (
            <div id="content">
                <h1>Welcome</h1>
                <h1>This is a Simple One Page app</h1>
                <ToDoApp></ToDoApp>
            </div>

        )
    }
}

