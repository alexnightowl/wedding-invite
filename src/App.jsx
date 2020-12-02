import "./App.css";
import Letter from "./components/Letter";
import Info from "./components/Info";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  return (
    <div className="App">
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/info" component={Info} />
          <Route path="/:name">
            <Letter />
          </Route>
        </AnimatedSwitch>
      </Router>
    </div>
  );
}

export default App;
