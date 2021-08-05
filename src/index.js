/* 1. Import React and ReactDOM libraries */
import React from 'react';
import ReactDOM from 'react-dom';
/* 2. Create a react component */
const App = function() {
    const time = (new Date()).toLocaleTimeString();

    return (
        <div>
            <div> Current Time: </div>
            <h3> {time} </h3>
        </div>
    );
};
/* 3. Take the react component and show it to the user */
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);