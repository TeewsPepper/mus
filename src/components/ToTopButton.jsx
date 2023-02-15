import { useState, useEffect } from "react"

import { BsFillArrowUpSquareFill } from "react-icons/bs";

function ToTopButton() {
    const[toTop, setToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setToTop(true)
            } else {
                setToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className="text-white">
      {ToTopButton && (
        <button className="btn"
                onClick={scrollUp}
        ><BsFillArrowUpSquareFill /></button>
      )}
    </div>
  )
}

export default ToTopButton
