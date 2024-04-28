import React, { useState } from "react";

const SkillTag = ({ name, SvgComponent }) => {
  const [showName, setShowName] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center p-1 rounded-lg cursor-pointer bg-dark dark:bg-light"
      onMouseOver={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      {showName && (
        <span className="absolute px-1.5 3xl:px-2 py-[3px] 3xl:py-1 text-xs 3xl:text-[13px] font-bold text-center rounded bg-violet-600 top-0 font-abeezee -translate-y-6 text-light">
          <span className="absolute w-2.5 h-2.5 rotate-45 -translate-x-1/2 -z-10 bg-violet-600 -bottom-1 left-1/2"></span>
          {name}
        </span>
      )}
      <div className="p-1.5 rounded-md border-3 dark:border-dark border-light">
        <SvgComponent className="rounded-md w-11 3xl:w-14" />
      </div>
    </div>
  );
};

export default SkillTag;
