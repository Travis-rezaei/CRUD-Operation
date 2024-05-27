import {useEffect} from 'react'

function TitlePage({title}) {

    useEffect(()=>{
        document.title=title;
    },[title])

  return null
}

export default TitlePage;