import React from 'react'
import { Link } from 'react-router-dom'
//Title Page
import TitlePage from '../TitlePages/TitlePage'

function NotFound() {
  console.log('NotDefined');
  return (
    <div className='Not-Found'>
      <TitlePage title='NotFound Page'/>
      <div className="err-img">
        <img src="https://i.imgur.com/AdvTDlI.jpg" alt="404 Not-Found" />
      </div>
      <h1>This page does not exist</h1>
      <Link to={'/'}><h1>Return to Home Page</h1></Link>
    </div>
  )
}

export default NotFound