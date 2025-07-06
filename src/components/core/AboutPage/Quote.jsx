import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white relative">
      <div className={`h-[200px] w-full absolute bottom-0 rounded-full bg-richblack-400 opacity-20 blur-3xl drop-shadow-[0_0_60px_#00C9A7] pointer-events-none`} />
              
       I’m passionate about reshaping how people learn. This platform <HighlightText text={"blends technology"} />,{" "}
<span className="bg-clip-text font-bold">dedication</span>, and real-world problem solving to deliver an
<span className="text-blue-50 bg-clip-text font-bold"> impactful and scalable learning experience</span>.

    </div>
  )
}

export default Quote