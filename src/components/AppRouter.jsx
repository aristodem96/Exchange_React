import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exchange from './Exchange';
import Support from './Support';
import Header from './Header';
import About from './About';
import HowToExchange from './HowToExchange';
import Footer from './Footer';
import Order from './Order';
import Transaction from './Transaction';

export default function AppRouter() {

    const [gotOrder, setGotOrder] = useState({});

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Exchange setGotOrder={setGotOrder} />} />
                <Route path='about' element={<About />} />
                <Route path='support' element={<Support />} />
                <Route path='howtoexchange' element={<HowToExchange />} />
                <Route path='order' element={<Order gotOrder={gotOrder} />} />
                <Route path='transactions' element={<Transaction />} />
            </Routes>
            <Footer />


        </BrowserRouter>
    )
}
