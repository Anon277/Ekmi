import './App.css';
import React, { useState, createContext, useContext } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './components/screens/home/Home.jsx';
import Catalog from './components/screens/catalog/Catalog.jsx';
import CustomFurniture from './components/screens/customfurniture/CustomFurniture.jsx';
import Contacts from './components/screens/contacts/Contacts.jsx';
import ForPartners from './components/screens/forpartners/ForPartners.jsx';
import ShowRooms from './components/screens/showrooms/ShowRooms.jsx';
import ForDealers from './components/screens/fordealers/ForDealers.jsx';
import Header from './components/layout/header/Header.jsx';
import Footer from './components/layout/footer/Footer.jsx';

import { register } from 'swiper/element/bundle';
import ScrollToTop from './components/scripts/ScrollToTop.js';
import Overlay from './components/blocks/overlay/Overlay.jsx';
register();

export const OverlayContext = createContext();

const OverlayProvider = ({ children }) => {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayCard, setOverlayCard] = useState(null);

    const ButtonClick = (card, visible) => {
            setOverlayCard(card);
            setOverlayVisible(visible);
        }

    return (
        <OverlayContext.Provider value={{ ButtonClick, overlayVisible, overlayCard }}>
            {children}
        </OverlayContext.Provider>
    );
};


const AppContent = () => {
    const { ButtonClick, overlayVisible, overlayCard } = useContext(OverlayContext);

    return (
        <>  
            {overlayVisible ? <Overlay /> : null}
            <ScrollToTop/>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/customfurniture" element={<CustomFurniture />} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/forpartners" element={<ForPartners />} />
                <Route path="/showrooms" element={<ShowRooms />} />
                <Route path="/fordealers" element={<ForDealers />} />
            </Routes>
            <Footer />
        </>
    );
};

function App() {
    return (
        <OverlayProvider>
            <AppContent />
        </OverlayProvider>
    );
}

export default App;

