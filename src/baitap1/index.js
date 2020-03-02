import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Sidebar from './sidebar';

// Component statefull(chính là 1 class) extend component
export default class Baitap1 extends Component{
    render(){
        return <div>
            <Header />
            Baitap1 Index component
            <div className='contents'>
            <Content />
            <Sidebar />
            </div>
            <Footer />
            </div>;
    }
}