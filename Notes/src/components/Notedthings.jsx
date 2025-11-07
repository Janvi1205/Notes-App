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
            <div className="bg-amber-200 p-3 font-medium overflow-y-auto overflow-x-hidden rounded-xl flex-1">
              <h2 className="text-xl mb-2 font-semibold">{elem.title}</h2>
              <p className="whitespace-pre-wrap text-sm">{elem.detail}</p>
            </div>

            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-gray-800">12 MAY, 2021</span>
              <img
                className="h-6 cursor-pointer"
                src="./public/pencil.png"
                alt="Edit"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notedthing;
