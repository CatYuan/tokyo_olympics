import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Events from "./components/Events/Events";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/countries" component={Countries} />
        <Route path="/events" component={Events} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
