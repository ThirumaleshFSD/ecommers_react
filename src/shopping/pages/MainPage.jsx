import React ,{useState} from 'react'
import Collections from '../components/Collections'
import Baner from '../components/Baner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Gents , Ladies } from '../data'

import WomenCollections from '../components/WomenCollections'

const MainPage = () => {
  const [gentsFashon , setGentsFashon]=useState(Gents)
  const [ladiesFashon , setLadiesFashon]=useState(Ladies)
  return (
    <div>
        <Header/>
        <Baner/>
        <Collections gentsFashon={gentsFashon}/>
        <WomenCollections ladiesFashon={ladiesFashon}/>
        <Footer/>
      
        
    </div>
  )
}

export default MainPage