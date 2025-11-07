const Notedthing = ({ data, setdata }) => {
  const infoarray = data;

  return (
    <div className="bg-amber-600 h-screen p-6 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {infoarray.map((elem, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl  flex flex-col justify-between h-80 p-4"
          >
            <div className="bg-amber-200 p-3 font-medium rounded-xl flex-1 overflow-y-auto wrap-break-word  overflow-x-hidden">

              <h2 className="text-xl mb-2 font-semibold">{elem.title}</h2>
              <p className="whitespace-pre-wrap text-sm">{elem.detail}</p>
            </div>

            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-gray-800">{new Date().toLocaleDateString("en-GB")}</span>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notedthing;
