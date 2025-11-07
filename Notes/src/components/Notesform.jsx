import { useState } from "react"
import ADDNOTE from "./ADDNOTE"
const Notesform = ({data,setdata}) => {

   const[Addnote,setAddnote]=useState(false);
  return (
    <div className="bg-amber-400 w-[300px] h-full p-4">
      <h1 className="text-3xl font-bold mt-2">NoteIt</h1>
      <div className="flex justify-between mt-5">
        <p className="font-medium text-2xl">Add a note</p>
        <img 
          onClick={()=>{setAddnote(true)}}
        className="h-9" src="./public/add.png" alt="" />
      </div>
      {Addnote && <ADDNOTE data={data} setdata={setdata} onClose={() => setAddnote(false)} />}
      
    </div>

  )
}
export default Notesform
