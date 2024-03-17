import React from "react";

function ChartsHeader({ category, title }) {
  return (
    <div className="mb-10">
      <p className="text-lg text-gray-400  dark:text-zinc-200">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-200">
        {title}
      </p>
    </div>
  );
}

export default ChartsHeader;
