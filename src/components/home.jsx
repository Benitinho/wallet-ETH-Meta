import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container d-flex flex-column justify-content-between all'>
                 <Header />
               <div className='flew-grow-1'>
                 <Outlet />
               </div>
                 <Footer />
             </div>
        );
    }
}
 
export default Home;