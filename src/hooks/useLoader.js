import React, { useState } from "react";

import { Bars } from "react-loader-spinner";
const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loader = (
    <div
      className="loader"
      style={{
        alignSelf: "center",
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && (
        <Bars
          height="50"
          width="50"
          color="#fcd34d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
        />
      )}
    </div>
  );
  return [loader, isLoading, setIsLoading];
};

export default useLoader;
