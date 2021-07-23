import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/countries" component={Countries} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
