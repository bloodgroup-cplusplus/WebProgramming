import React from 'react';

import { CecMembers, GangtokDec,Advisors,ChiefMinister,Grievances,Incharges, EducationMinister,President,AdditionalChiefSecretary, FindUs, Footer, Gallery, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <ChiefMinister />
    <EducationMinister/>
    <AdditionalChiefSecretary/>
    <President/>
    <CecMembers/>
    <GangtokDec />
    <Gallery />
    <Grievances/>
    <Advisors/>
    <Incharges/>
    <FindUs />
    <Footer />
  </div>
);

export default App;
