import React from 'react';
import FormComponent from './FormComponent';
import DisplayTodo from './DisplayTodo'

class App extends React.Component {
    render() {
        return(
            <div>
                <FormComponent/>
                <DisplayTodo/>
            </div>
        )
    }
}

export default App;