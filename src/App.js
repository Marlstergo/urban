import React from 'react';
import './App.scss';
import {Switch, Redirect, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import Login from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import {auth, createUserProfileDocument, /*addCollectionAndDocuments*/} from './firebase/firebase.util'
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import {hideCart} from './redux/cart/cart.action'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
import CheckoutPage from './pages/checkout-page/checkoutPage.component';
import {selectCollectionForPreview} from './redux/shop/shop.selector'

class App extends React.Component {
  unsunscribeFromAuth = null;
  
  componentDidMount(){
    
    const {setCurrentUser, /*collectionArray*/} = this.props;
    
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
    // addCollectionAndDocuments('collections', collectionArray.map(({title, items}) => ({items, title })))
  }
  

  componentWillUnmount(){
    this.unsunscribeFromAuth()
  }


  render(){
    return (
      <div >
        <Header/>
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component= {CheckoutPage} />
          <Route exact path='/sign-in' render={() => 
            this.props.currentUser ?
              (<Redirect to= '/' />)
              :
              (<Login/>)
          } />
        </Switch>
        
      </div>
    );
  }

}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionForPreview
})
const mapDispatchtoProps= dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  hideCart: () => dispatch(hideCart())
  
})
export default connect(mapStateToProps, mapDispatchtoProps)(App);
