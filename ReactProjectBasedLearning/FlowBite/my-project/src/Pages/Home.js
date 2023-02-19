import React from 'react'

import Header from "../Components/Header";
import FindUs from "../Components/FindUs";
import ChiefMinister from "../Components/ChiefMinister";
import EducationMinister from "../Components/EducationMinister";
import AdditionalChiefSecretary from "../Components/AdditionalChiefSecretary";
import OtherMembers from "../Components/OtherMembers";
import President from "../Components/President";
import Cec from "../Components/Cec";
import Dec from "../Components/Dec"
import Gallery from "../Components/Gallery";

function Home() {
  return (
    <div>

    <Header/>
    <ChiefMinister/>
    <EducationMinister/>
    <AdditionalChiefSecretary/>
    <President/>
    <Cec/>
    <Dec/>
    <OtherMembers/>
    <Gallery/>
    <FindUs/> 
    </div>
  )
}

export default Home
