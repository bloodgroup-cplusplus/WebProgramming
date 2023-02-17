import React from 'react'

import { CecMembers, GangtokDec,Advisors,ChiefMinister,Grievances,Incharges, EducationMinister,President,AdditionalChiefSecretary, FindUs,  Gallery, Header } from '../../container';


function Home() {
  return (
    <div>
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
    </div>
  )
}

export default Home
