const ADDNOTE =()=>{
    return(
        <div>
            <div className="fixed flex inset-0  items-center justify-center bg-black/50 z-50">
               <div className="bg-white p-6 rounded-2xl w-[500px] h-120 ">
                <h1 className="flex justify-center font-bold text-2xl">Add a Note</h1>
                 <form className=" flex flex-col mt-10 gap-10" action="">
                    <input className="border-2 rounded-lg p-4" type="text" placeholder="Enter the Title"  id="" />
                    <textarea className="border-2 h-55 rounded-lg p-4" placeholder="Enter the note" id=""></textarea>

                </form>
               </div>

            </div>
        </div>

    )
}
export default ADDNOTE;