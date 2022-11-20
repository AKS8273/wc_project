import React from 'react';
import Card from './Components/Card';
import './index.css'
import Sdata from './Components/Sdata';

const App = () => {
return (
<>
  <h1 className='heading_style' > Top 5 series on Netfilix  </h1>  
  {Sdata.map((val , index)=>{
    console.log(index);// use console for see index how working
    return (
  <Card
  key = {val.id}
   imgsrc = {val.imgsrc}
  title ={val.title}
  sname ={val.sname}
  Link = {val.Link} />
  );

  }) }
  </>
  )

}

export default App;