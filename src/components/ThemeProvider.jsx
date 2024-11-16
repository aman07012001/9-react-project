import { Component, createContext, useState } from "react";
import Starrating from "./Starrating";
import Accordian from "./Accordian";
import ImageSlider from "./ImageSlider";
import Randomcolor from "./Randomcolor";
import Loadmore from "./Loadmore";
import GenerateQrcode from "./Qrcode";
import Modal from "./Modal";
import TestuseOutsideClick from "./useOutsideclick";
import ScrolltoTop from "./ScrolltoTop";

export const ThemeContext=createContext()


function ThemeProvider({children}) {
    const [limit, setlimit] = useState(0);

 const choose=[
    {
        key:true ,
        Component: <Starrating key={1} />
    },
    
        {
            key:true,
            Component: <Accordian key={2} />
        },
        {
            key:true,
            Component: <TestuseOutsideClick key={3} />
        },
        
        
        {
            key:true ,
            Component: <ImageSlider key={4} />
        },
        
        {
            key:true ,
            Component: <Randomcolor key={5}/>
        },
        
        {
            key:true ,
            Component: <Loadmore  url={`https://picsum.photos/v2/list?page=${limit}&limit=10`}
        limit={limit}
        setlimit={setlimit} key={6}/>
        },
        
        {
            key:true ,
            Component: <GenerateQrcode key={7}/>
        },
        
        {
            key:true ,
            Component: <Modal key={8} />
        },
        {
            key:true ,
            Component: <ScrolltoTop key={9} url="https://dummyjson.com/products?limit=100"/>
        },
        
       
  
 ]

    

  return <ThemeContext.Provider value={10}>
   {
    choose.map((obj)=>{
 if(obj.key){
    return obj.Component
 }
    })
   }

  </ThemeContext.Provider>;
}

export default ThemeProvider;
