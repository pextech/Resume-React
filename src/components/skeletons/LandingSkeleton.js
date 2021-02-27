import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

  <SkeletonTheme color="#ddd" highlightColor="#444" />;
function LandingSkeleton() {
  return (
    <div className="flex flex-row shadow-md pl-12 sm:pl-0 xs:pl-0 xsm:pl-0 justify-between">
      <div className="m-10 p-10 xs:m-4 xs:p-0 xsm:p-0 sm:p-4 sm:m-4 xsm:m-4">
        {/* left side */}
        <div className="m-10 xs:m-10 sm:m-4 xsm:m-4">
          {/* Logo or Picture */}
          <Skeleton height={200} width={500} className="logo xl:w-80 xl:h-80 ml-12 xs:w-1/2 xs:ml-20 xs:h-1/2" />
        </div>
        <div>
          <div>
            {/* cool text here */}
            <Skeleton height={200} width={500} className="intro text-5xl text-primary-100 ml-40 p-12 xs:ml-4 sm:p-4 xsm:p-4 xs:p-4 " />
          </div>
          <div className="flex md:flex-row xs:flex-col xsm:flex-col justify-evenly ml-12 xs:p-0 xsm:p-0 sm:p-0 sm:m-4 xsm:m-4 xs:ml-4">
            {/* buttons here */}
            <Skeleton height={50} width={100} className="btn rounded-md text-white border-black bg-black xl:h-12 xl:w-1/2 md:w-1/2 xl:ml-10 md:ml-10 sm:ml-0 xsm:ml-0 hover:bg-gray-800" />
            <Skeleton height={50} width={500} className="btn rounded-md text-white border-black bg-black xl:h-12 xl:w-1/2 md:w-1/2 xl:ml-10 md:ml-10 sm:ml-0 xsm:ml-0 hover:bg-gray-800" />
          </div>
        </div>
      </div>
      <div className="editor">
        {/* righ side */}

        <Skeleton width={500} height={500} />
      </div>
    </div>
  );
}

export default LandingSkeleton;
