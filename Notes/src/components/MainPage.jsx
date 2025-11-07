// MainPage.jsx
import { useEffect, useState } from "react"
import Notedthing from "./Notedthings"
import Notesform from "./Notesform"



const MainPage = () => {
  const[data,setdata]=useState([])
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setdata(JSON.parse(savedNotes));
    }
  }, []);

  // ✅ Save notes to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);


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
