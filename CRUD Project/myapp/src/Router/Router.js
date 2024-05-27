import Home from '../Components/Home'
import Create from '../Components/Create'
import Read from '../Components/Read'
import Update from '../Components/Update'
// import Main from '../CLomponents/Main'
import NotFound from '../Components/NotFound'



 const Routes=
[
    {path:'/' , element:<Home/>},
    {path:'/Create' , element:<Create/>},
    {path:'/Update/:id' , element:<Update/>},
    {path:'/Read/:id' , element:<Read/>},
    {path:'*' , element:<NotFound/>},
]

export default Routes;