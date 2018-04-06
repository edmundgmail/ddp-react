import * as React from 'react';

interface SideBarProps {
    isOpen: boolean;
    toggleSidebar: boolean;
}

class SideBar extends React.Component<SideBarProps, {}> {
    render() {
        const sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
        return (
            <div className={sidebarClass}>
                <div>I slide into view</div>
        <div>Me too!</div>
        <div>Meee Threeeee!</div>
        <button onClick={this.props.toggleSidebar} className="sidebar-toggle">Toggle Sidebar</button>
        </div>
    );
    }
});
