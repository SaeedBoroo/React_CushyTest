import React from 'react'
import Header from './header/header';
import Footer from './footer'

const MasterLayout = (props) => (
    <>
        <div className="rtl">
            <Header></Header>
            
            <div className="container py-4">{props.children}</div>
            <Footer></Footer>
        </div>
    </>
)



export default MasterLayout;