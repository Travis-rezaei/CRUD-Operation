import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Axios from '../api/contacts'
//Title Page
import TitlePage from '../TitlePages/TitlePage'

function Read() {

  const {id}=useParams()

  const[Data,setData]=useState(null)
 

  useEffect(()=>{
    const GetData= async()=>{ 
      try{
      const respons=await Axios.get(`users/${id}`)
      setData(respons.data)
      }catch(err){
       toast.error('Server connection error')
      }
    }
   GetData()
  },[])

  return (
    <div className='Read'>
      <TitlePage title='Read User'/>
       <div className="Detail-Read section container">
         <h3>Detail of User</h3>
         <div className="Detail">
           <strong>Name: {Data&&Data.name}</strong>
         </div>
         <div className="Detail">
           <strong>Email: {Data&&Data.email}</strong>
         </div>
         <div className="Detail">
           <strong>Phone: {Data&&Data.phone}</strong>
         </div>

         <div className="link">
           <Link to={`/Update/${id}`} className='Edit'>Edit</Link>
           <Link to={'/'} className='Back'>Back</Link>
         </div>

       </div>
    </div>
  )
}

export default Read