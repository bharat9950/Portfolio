import React from 'react'
import Typewriter from 'typewriter-effect'

export const Extratext = () => {
  return (
    <div className="Extratext">
      <Typewriter
        options={{
          strings: ['Student','Software Developer', 'MERN Stack Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}
export default Extratext;