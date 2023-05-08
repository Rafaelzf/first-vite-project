import React, { ReactElement } from 'react';

interface IPropButtons {
  pageLimit: boolean;
  hadleClick: () => void;
}

const Buttons = ({ pageLimit, hadleClick }: IPropButtons): ReactElement => {
  return (
    <>
      {pageLimit ? (
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={hadleClick}
        >
          Reduce posts
        </button>
      ) : (
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-lime-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={hadleClick}
        >
          Load more posts
        </button>
      )}
    </>
  );
};

export default Buttons;
