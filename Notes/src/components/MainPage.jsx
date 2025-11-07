// MainPage.jsx
import { useState } from "react"
import Notedthing from "./Notedthings"
import Notesform from "./Notesform"


const MainPage = () => {
  const[data,setdata]=useState([])

  return (
    <div className="flex h-screen">
      {/* Left sidebar */}
      <Notesform data={data} setdata={setdata} />

      {/* Right section */}
      <div className=" w-screen flex flex-col">
        <div className="bg-amber-800 h-20 flex-none "><p className="text-5xl mt-2 ml-6 font-bold">Notes</p></div>
        <div className="flex-1">
          <Notedthing data={data} setdata={setdata} />
        </div>
      </div>
    </div>
  )
}
export default MainPage
