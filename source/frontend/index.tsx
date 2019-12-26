import * as React from 'react';
import { render } from 'react-dom';

const HelloWorld = () => {
    return (<div>Welcome to the React/Apollo/Typescript example</div>)
}

render(<HelloWorld />, document.getElementById('main'));