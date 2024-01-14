import React from 'react';
import { TailSpin as LoaderSpinner } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <LoaderSpinner type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;
