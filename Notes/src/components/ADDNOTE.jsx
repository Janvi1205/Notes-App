import { useState } from "react";

const ADDNOTE = ({data,setdata}) => {
    const [title, settitle] = useState("")
    const [detail, setdetail] = useState("")

    

    function handlesubmit(e)
    {
        e.preventDefault();
        const copydata=[...data]
        copydata.push({title, detail})

        setdata(copydata)

        settitle(' ')
        setdetail(' ')

        console.log(copydata)

        

    }
    return (
        <div>
            <div className="fixed flex inset-0  items-center justify-center bg-black/50 z-50">
                <div className="bg-white p-6 rounded-2xl w-[500px] h-140 ">
                    <h1 className="flex justify-center font-bold text-2xl">Add a Note</h1>
                    <form onSubmit={(e)=>handlesubmit(e)}  className=" flex flex-col mt-10 gap-10" action="">
                        <input
                            value={title}
                            onChange={(e) => { settitle(e.target.value) }}
                            className="border-2 rounded-lg p-4" type="text" placeholder="Enter the Title" id="" />
                        <textarea
                            value={detail}
                            onChange={(e) => { setdetail(e.target.value) }}
                            className="  border-2 h-80 rounded-lg p-4" placeholder="Enter the note" id=""></textarea>

                        <button className="-mt-8 rounded-2xl bg-amber-950 text-white p-1">AddIt</button>    
                    </form>
                </div>

            </div>
        </div>

    )
}
export default ADDNOTE;