import React from 'react'
import Banner from '../../components/Banner/Banner'
import banner_1 from"../../assets/banner_1.png"
import Exprience from '../../components/exprience/exprience';

function Home() { 
    const header_1 = "Tuneup Your Car to Next Level";
    const header_2 = "We are leader in Car Mechanical Work";

  return (
    <div>
        <Banner  banner={banner_1} header={header_1}/>
        <Exprience />
    </div>
  )
}

export default Home