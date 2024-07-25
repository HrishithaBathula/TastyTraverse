import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from './Components/Home/Home';
import Restaurants from './Components/Restaurants/Restaurants';
import Details from "./Components/Details/Details";
import Login from "./Components/Auth/Login";
import Signup from './Components/Auth/Signup';
import PlaceOrder from './Components/Booking/PlaceOrder';
import ViewOrder from './Components/Booking/ViewOrder';
import Checkout from './Components/Booking/Checkout';

function App() {
  return (
    <BrowserRouter> 
      <Route exact path="/" component={Home}/>
      <Route path="/restaurants/:mealId" component={Restaurants} />
      <Route path="/details/:id" component={Details}/>
      <Route path="/menu/:restId" component={Details}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Signup}/>
      <Route path="/placeorder/:restName" component={PlaceOrder
      }/>
      <Route path="/vieworders" component={ViewOrder}/>
      <Route path="/checkout">
        <Checkout />
      </Route>
    </BrowserRouter>
  );
}

export default App;
