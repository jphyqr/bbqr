import React from "react"
import loadable from "@loadable/component";
const SEO = loadable(()=>import('../components/seo'))

const MenuLayout = ({children})=>{
 return(  <div className="container">
  
       <main>
       <SEO 
      title="BBQR Home"
      description="BBQ in Regina SK"
      image="/500gal.png"
      article="null"
      />
      {children}
       </main>  
   
       <style jsx>{`
     
      .test{
          width: 100%;
          height: 100px;
          margin-bottom: 50px;
          background-color: blue;
      } 
       .container{
           background-color: red;
           position:relative;
           display:flex;
           width: 100vw;
           min-height: 100vh;
           height: 100%;

       }

       aside {
           background-color: yellow;
          
           height: 100vh;
           min-height: 100vh;
           position: sticky;
           position: -webkit-sticky;
           top:0px;
           display: flex;
           flex-direction: column;
           flex-grow: 1;
          

       }

     
       main {
        display:flex;
        flex-direction: column;
    
        align-content: center;
        box-sizing: border-box;

        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
          'Arial', sans-serif;
        

   width: 100vw;
     
       height: 100vh;
   
        text-align: center;
        background-color: red;
     
     
      }
       `}</style>
   </div> )
}

export default MenuLayout