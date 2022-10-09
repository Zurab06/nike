
import { useState } from 'react';
import './App.css';

function App() {

  const[item,setItem]=useState(false)
  const[hide,setHide]=useState(false)
const deleteEvent=()=>{
setItem(false)


}

  const buyEvent=()=>{
  setItem(true)
  
   }


const hidden=()=>{
setHide(true)
}
const hideblock = ()=>{
setHide(false)
}

  return (


  


    <div className="App">



      <div className='card'>
        <img className='img' src=
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdeb34c8-a6bf-4530-9145-b6cfea5dd963/air-force-1-07-lv8-1-mens-shoes-x0bMdL.png" alt=""
        />
        <div className='main-items'>
          <div className='item-name'> Nike Sneaker</div>
          <button className='btn1' onClick={hidden} >Детали</button>
       
       
          {hide===true ? <div className='details-popup'>
           <button className='hide' onClick={hideblock} >x</button>
          <div className='hiden'>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum, vitae delectus fugiat nisi opti'
           </div>
            </div>: false}
        </div>
        <h3 className='price'>$120</h3>
        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium sit suscipit ut. Saepe, eius omni</div>
        <div className='buttons'>
        <button className={item===false ? 'add' : 'disabled add'} disabled={item} onClick={buyEvent}>{item===false ?  'Добавить  в корзину':'в корзине'  }</button>
        {item &&  <button onClick={deleteEvent} className='delete'>удалить из корзины</button>}
        </div>
      </div>
      
      
    
    </div>
  );
}

export default App;
