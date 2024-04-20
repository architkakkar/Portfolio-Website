import React, { useState } from "react";

const SkillTag = ({ name, SvgComponent }) => {
  const [showName, setShowName] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center p-1 rounded-lg bg-dark dark:bg-light"
      onMouseOver={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      {showName && (
        <span className="absolute px-1 py-0.5 text-xs font-bold text-center rounded bg-violet-600 -top-4 font-abeezee translate-x-5 translate-y-14 text-light z-10">
          {name}
        </span>
      )}
      <div className="p-1.5 rounded-md border-3 dark:border-dark border-light">
        <SvgComponent className="rounded-md w-11" />
      </div>
    </div>
  );
};

export default SkillTag;
