import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return <div>Latitude:</div>;
// };


// App component is borrowing funcionality from the React Component base class
class App extends React.Component {
    // constructor function from JS - it is the first function called when an instance of the calls in created. When we use constructor function we are overridding the constructor funcion associated with the React.Component class
    // constructor(props) {
    //     // super function is required with props passed in constructer method - super is a reference to the parent constructor function in React.Component
    //     super(props);

    //     // this is our state object - this.state is a special property from React.Component
    //     this.state = { lat: null, errorMessage: '' };

    //     // equivalent to initializing state with constructor method - babel with add constructor method
        state = { lat: null, errorMessage: '' };
        // call back function
        // window.navigator.geolocation.getCurrentPosition(
        //     position => {
        //         // setState is a function from React.Component class
        //         this.setState({ lat: position.coords.latitude });
        //     },
        //     // failure callback
        //     err => {
        //         console.log(err);
        //         this.setState({ errorMessage: err.message });
        //     }
        // );
        

    // }

    componentDidMount() {
        console.log('My component was rendered to the screen');
        // call back function // setState is a function from React.Component class
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    };

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    };

    // React requires render function/method
    render() { 
        //<div>
        //         Latitude: {this.state.lat}
        //         <br />
        //         Error: {this.state.errorMessage}
        //     </div>
        
        //conditional rendering
        if  (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
