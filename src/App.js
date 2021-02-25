import React from 'react';
import './App.scss';
import {Switch, Redirect, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import Login from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
// import {hideCart} from './redux/cart/cart.action'


import CheckoutPage from './pages/checkout-page/checkoutPage.component';
import ContactPage from './pages/contact-page/contact-page.component'
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

class App extends React.Component {
  unsunscribeFromAuth = null;
  
  componentDidMount(){
    const {checkUserSession} = this.props
    checkUserSession()
    // this.unsunscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      
    //   if (userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapshot => 
    //       {
    //         setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data()
    //         })
    //     })
    //   } else{
    //     setCurrentUser(userAuth)
        
    //   }
    // });
    // addCollectionAndDocuments('collections', collectionArray.map(({title, items}) => ({items, title })))
  }
  

  componentWillUnmount(){
    // this.unsunscribeFromAuth()
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
          <Route 
          exact
          path='/contact'
          component={ContactPage}
          />
        </Switch>
        
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


