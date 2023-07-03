import Header from "./components/Header"
import RecipeLists from "./components/RecipeLists"
import Tabs from "./components/Tabs"


import './App.scss'
import { useState } from "react"
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

      {loader && <div className='loader'>
        <div className='spinner'></div>
      </div>}

    </div>
  )
}

export default App
