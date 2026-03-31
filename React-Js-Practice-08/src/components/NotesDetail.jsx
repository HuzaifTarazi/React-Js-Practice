import React from "react";

const NotesDetail = ({ idx, notesArr, newNotes, title, detail }) => {
  const delFunction = () => {
    const delArr = [...notesArr];
    delArr.splice(idx, 1);
    newNotes(delArr);
    console.log(delArr);
  };
  return (
    <div className="px-12">
      <div className=" my-3 py-3 px-5 flex flex-col justify-between rounded bg-gray-600 text-white shadow-md">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="mt-3 text-md text-lg">{detail}</p>

        <button
          onClick={delFunction}
          className="bg-red-500 py-1 px-10 rounded shadow-sm active:bg-red-600 mx-auto"
        >
          DEL
        </button>
      </div>
    </div>
  );
};

export default NotesDetail;
