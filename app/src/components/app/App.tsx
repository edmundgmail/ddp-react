import * as React from 'react';
import './App.css';

interface AppState{
  sidebarOpen: boolean;
}

interface AppProps {

}

class App extends React.Component<AppProps, AppState>{

    constructor (props: AppProps, context: any){
          super(props, context);
          this.state= {sidebarOpen: false};
    }

    handleViewSidebar(){
        this..setState( {...this.state, sidebarOpen: this.state.sidebarOpen});
    }

  render() {
    return (
        <div>
            <Header onClick={this.handleViewSidebar} />
            <SideBar isOpen={this.state.sidebarOpen} toggleSidebar={this.handleViewSidebar} />
            <Content isOpen={this.state.sidebarOpen} />
        </div>
    );
  }
}

export default App;
