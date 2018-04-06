import * as React from 'react';

interface HeaderProps {
}

class Headerr extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <header>
                <a href="javascript:;" onClick={this.props.onClick}>Click Me!</a>
        </header>
        );
    }
}
