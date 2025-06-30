import React from 'react'

const Transition = () => {
    
      let divArr: number[] = [1, 2, 3, 4, 5];
  return (
    <>
        <div className="introDiv absolute w-screen h-screen flex ">
        {divArr.map((item: number): React.JSX.Element => {
          return (
            <>
              <div
                key={item}
                className="introBlock h-full w-[20%] bg-black"
              ></div>
            </>
          );
        })}
        <h1 className="absolute welcome z-6 text-9xl text-white font-bold left-1/2 -translate-x-1/2 text-center top-[50%] translate-y-[-50%]">
          {" "}
          Welcome{" "}
        </h1>
      </div>
    </>
  )
}

export default Transition