import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import Login from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import {auth, createUserProfileDocument} from './firebase/firebase.util'


class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }
  unsunscribeFromAuth = null;
  componentDidMount(){

    this.unsunscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => (
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          },() => {
            console.log(this.state , 'exists', snapshot, snapshot.data())
            }
          )
        )    
        )
      } else{
        this.setState({
          currentUser: userAuth
        }, console.log('nonexist'))
      }
    });
  }

  componentWillUnmount(){
    this.unsunscribeFromAuth()
  }

  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={Login} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
