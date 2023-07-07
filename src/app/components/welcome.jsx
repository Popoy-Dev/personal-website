import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const WelcomeText = ({ text } ) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: text,
      typeSpeed: 50,
      backSpeed: 50,
      // loop: true,
      // loopCount: Infinity,
      showCursor: false,
      onBegin: self => {}
    };
    typedRef.current = new Typed(typedRef.current, options);
    return () => {
      typedRef?.current?.destroy();
    };
  }, [text]);



  return (
    <div className="wrap" onClick={() => typedRef.current?.start()}>
      <div className="flex-wrap mx-10">
        <span
          className='whitespace-normal'
          ref={typedRef}
        />
      </div>
    </div>
  );
};

export default WelcomeText;