import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";



function App() {
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   fetch('./courses.JSON')
  //   .then(res => res.json())
  //   .then(data => setCourses(data))
  // },[])
  // console.log(courses);
  return (
    <Router>
      <Header></Header>

      <Switch>
        
      <Route path="/home">
        <Home></Home>
      </Route>

      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path ="/services">
        <Services></Services>
      </Route>

      <Route path ="/about">
        <About></About>
      </Route>

      <Route path ="*">
        <NotFound></NotFound>
      </Route>

      </Switch>

      <Footer></Footer>
      
    </Router>
  );
}

export default App;
