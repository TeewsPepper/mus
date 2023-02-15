

function Error({children}) {
  return (
    <div className="w-3/4 md:w-2/4 text-xs md:text-lg m-auto  rounded-md text-center my-4 bg-red-600 text-white p-1">
      {children}
    </div>
  )
}

export default Error
