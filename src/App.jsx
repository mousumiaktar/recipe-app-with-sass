import Header from "./components/Header"
import RecipeLists from "./components/RecipeLists"
import Tabs from "./components/Tabs"


import './App.scss'
import { useState } from "react"
import Footer from "./components/Footer"
function App() {

  const [loader, setLoader] = useState(true)

  return (
    <div>
      <Header />
      <Tabs
        setLoader={setLoader}
      />
      <RecipeLists
        setLoader={setLoader}
      />
      <Footer />

      {loader && <div className='loader'>
        <div className='spinner'></div>
      </div>}

    </div>
  )
}

export default App
