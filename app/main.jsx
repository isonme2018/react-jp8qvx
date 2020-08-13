
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Calendar } from '@progress/kendo-react-dateinputs';

class App extends React.Component {
    render() {
        return <Calendar />;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

