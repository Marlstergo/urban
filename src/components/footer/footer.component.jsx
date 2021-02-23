import React from 'react'


// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect';

import './footer.styles.scss'

const Footer = () =>{
    console.log(document.getElementById('demo'))
    return(
        <div>
            <h1 className="shola" >My name is Maliqiberry, OMO IYA TEACHER!!!</h1>
            <div id='demo'>fhola</div>
            <a href="/">HOME</a>

            <footer className="footer-container text-center">
                <div className="container">
                    <div className="row">
                    <div className="col-xs-12">
                        <p>© UNTITLED | Website created with <a href="http://www.mashup-template.com/" title="Create website with free html template">Mashup Template</a>/<a href="https://www.unsplash.com/" title="Beautiful Free Images">Unsplash</a></p>
                    </div>
                    </div>
                </div>
            </footer>
            {document.getElementsByClassName('shola').length === 0 ? 
                <div>
                    <h1>NOW AM USING IT RIGHT</h1>
                </div> :
                <div>
                    <h1>ITS WORKING PERFECTLY!!@@</h1>
                </div>
        }
        {
            console.log(document.getElementsByClassName('shola').length)
        }
        {console.log(document.getElementsByClassName('shola'))}
        {console.log(document.getElementsByClassName('shola').item[0])}
        </div>
    )
}

// const mapStateToProps =createStructuredSelector({

// })
export default Footer;