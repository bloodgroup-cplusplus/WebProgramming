import React from 'react';

import {  ChiefMinister,Grievances,Incharges, EducationMinister,President,AdditionalChiefSecretary, FindUs, Footer, Gallery, Header, Laurels } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    {/*<AboutUs />
    <SpecialMenu />*/}
    <ChiefMinister />
    <EducationMinister/>
    <AdditionalChiefSecretary/>
    <President/>
    <Laurels />
    <Gallery />
    <Grievances/>
    <Incharges/>
    <FindUs />
    <Footer />
  </div>
);

export default App;
