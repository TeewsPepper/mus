import { Link } from "react-router-dom"

function Videos() {
  return (
    <>
    <h2 className="text-xl md:text-2xl text-center mb-5 md:mb-10">Videos</h2>
    <div className="flex justify-center mb-10 px-3">
      <iframe className="aspect-ratio-16-9" width="560" height="315" src="https://www.youtube.com/embed/gMpBh1MTUqY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
     <div className="flex justify-center mb-10 px-3 ">
        <iframe className="aspect-ratio-16-9" width="560" height="315" src="https://www.youtube.com/embed/TYZhUD3ZfMw"   title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media;    gyroscope; picture-in-picture; web-share"></iframe>
     </div>
     <div className="flex justify-center mb-10 px-3 ">
     <iframe className="aspect-ratio-16-9 " width="560" height="315" src="https://www.youtube.com/embed/bd88iLzuiWc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
     </div>
     <div className="flex justify-center mb-10 px-3 ">
     <iframe className="aspect-ratio-16-9" width="560" height="315" src="https://www.youtube.com/embed/BXeA8sAcYJI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
     </div>

     <div className="flex justify-center mb-3">
          <Link to='/'>
            <button type="button" className="text-white border p-2 mt-3">Volver</button>
          </Link>
      </div>
   </>
  )
}

export default Videos
