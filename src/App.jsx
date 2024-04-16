import React from "react"
import { Navbar,Header,Featurs,Download,Subscribe , Faq ,Footer} from "./component/index"


function App() {
 

  return (
    <main>
      <header className="header-bg">
        <Navbar/>
        <Header/>
      </header>
      <Featurs/>
      <Download/>
{/*       <Subscribe/> */}
      <Faq/>
      <Footer/>
      
    </main>
  )
}

export default App
