function NoCourses() {
  return (
    <div className="flex flex-col w-full  mx-6 p-4  rounded-md border border-gray-600/30">
      <h2 className="text-2xl text-center font-bold text-primary">
        No Results Found!
      </h2>
      <p className="text-slate-600 text-center">
        Try Changing your search criteria
      </p>
    </div>
  );
}

export default NoCourses;
