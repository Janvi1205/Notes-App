const Notedthing = ({ data, setdata }) => {
    const infoarray = data
    return (
        <div className="bg-amber-600 h-screen p-6 flex flex-wrap gap-6 overflow-auto">
            {infoarray.map((elem, idx) => (
                <div className="w-80 h-80 bg-white ml-5 rounded-2xl mt-4 ">

                    <div className="flex-wrap h-50 w-70 mt-6 ml-5 bg-amber-200 p-2 font-medium  overflow-hidden ">
                        <h2 className="text-xl mb-3">{elem.title}</h2>
                        dfhsdifhisdfewfowibfweiofbwegiw Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rem sunt porro dignissimos reprehenderit modi libero quia obcaecati asperiores beatae distinctio, unde numquam assumenda ab perspiciatis quasi fugit quos velit dolor nam architecto cumque eos magnam magni! Impedit, dolorem perferendis?</div>
                    <div className="flex mt-12  justify-between">

                        <div className="ml-4"> 12 MAY,2021</div>
                        <div className="mr-5"><img className="h-9 -mt-2 mr-3" src="./public/pencil.png" alt="" /></div>
                    </div>

                </div>


            ))}



        </div>

    )
}
export default Notedthing;