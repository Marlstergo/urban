import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import Login from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import {auth, createUserProfileDocument} from './firebase/firebase.util'
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {
  unsunscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsunscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => 
          {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        })
      } else{
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount(){
    this.unsunscribeFromAuth()
  }

  
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={Login} />
        </Switch>
        
      </div>
    );
  }
  
}

const mapDispatchtoProps= dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchtoProps)(App);
