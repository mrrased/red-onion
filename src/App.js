import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import MenuBar from './Component/MenuBar/MenuBar';
import FoodProduct from './Component/FoodProduct/FoodProduct';
import Footer from './Component/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BreakFast from './Component/BreakFast/BreakFast';
import Lunch from './Component/Lunch/Lunch';
import Dinner from './Component/Dinner/Dinner';
import ChooseTsFood from './Component/ChooseTsFood/ChooseTsFood';
import LunchSource from './Component/LunchSource/LunchSource';
import DinnerSource from './Component/DinnerSource/DinnerSource';
import BreakeFastSource from './Component/BreakeFastSource/BreakeFastSource';
import NotFound from './Component/NotFound/NotFound';
import ReviewItem from './Component/ReviewItem/ReviewItem';
import Login from './Component/Login/Login';
import { AuthContextProvider } from './Component/Login/useAuth';




function App() {
  const user = {name: 'pornima', email: 'sjdgha@gamil.com'}
  return (
    
     <div> 
       <AuthContextProvider>
       <Header></Header>
       <Banner></Banner>
       <MenuBar></MenuBar>
       <Router>
         <Switch>
           <Route exact  path="/all" component={FoodProduct}>
             <FoodProduct></FoodProduct>
           </Route>
           <Route exact  path="/breakfast" component={BreakFast}>
             <BreakeFastSource></BreakeFastSource>
           </Route>
           <Route exact  path="/lunch" component={Lunch}>
             <LunchSource></LunchSource>
           </Route>
           <Route exact  path="/dinner" component={Dinner}>
             <DinnerSource></DinnerSource>
           </Route>
           <Route exact  path="/review" >
             <ReviewItem ></ReviewItem>
           </Route>
           <Route>
              <Login exact  path="/"></Login>
           </Route>
           <Route path="*">
              <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
       <ChooseTsFood></ChooseTsFood>
       <Footer></Footer>
       </AuthContextProvider>
     </div>
    
  );
}

export default App;
// thik ache ki vai, hmm vai apnr problem ta bujte parcn vai, kothy vul korciln hmm, okau vai thank you vai