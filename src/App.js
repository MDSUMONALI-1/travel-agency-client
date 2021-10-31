
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Header/Header'
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrder from './Pages/MyOrder/MyOrder';


function App() {
  return (
    <div className="App">
      <h2>wellcome to Dhaka Travel Agaency</h2>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
             <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeorder/:serviceId">
            <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
