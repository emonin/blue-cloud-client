import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound'
import Register from './components/Register/Register';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import OrderPackage from './components/OrderPackage/OrderPackage';
import AddPackage from './components/AddPackage/AddPackage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllBooking from './components/ManageAllBooking/ManageAllBooking';

function App() {
  return (
    <div className="main-section">
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
            <PrivateRoute path="/package/:id">
              <OrderPackage />
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/addpackage">
              <AddPackage />
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/manage-all-booking">
              <ManageAllBooking />
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
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
