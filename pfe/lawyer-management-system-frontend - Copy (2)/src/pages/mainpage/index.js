import React from 'react'
import {  Acceuil,  Apropos, FormContact, Prqnous, Services } from '../../components'
import './style.css'

function MainPage() {
  return (
    <div className='main-page'>
        <Acceuil/>
        <Services/>
        <Apropos/>
        <FormContact/>
        <Prqnous/>
    </div>
  )
}

export default MainPage