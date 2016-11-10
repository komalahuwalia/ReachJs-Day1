import React from 'react'
import Welcome from 'components/Welcome'
import HelloKitty from 'components/HelloKitty'
import MyClock from 'components/MyClock'

export default  class App extends React.Component{

    getDateTime(){
        const date = new Date();
        return date.toISOString();
    }

    render(){
        return (
            <div id="content">
                <h1>Welcome</h1>
                <h1>This is a Simple One Page app</h1>
                < Welcome name="Komal" />
                <MyClock />
                <HelloKitty imageUrl="http://wallpapercave.com/wp/WcKr5nB.jpg" name="Hello Kitty" message="Hey Kitty"/>
            </div>

        )
    }
}

