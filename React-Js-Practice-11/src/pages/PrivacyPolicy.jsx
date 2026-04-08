import React from "react";
import { useParams } from "react-router";

const PrivacyPolicy = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
     You Entered In URL - {params.id} <br />
      PrivacyPolicy
    </div>
  );
};

export default PrivacyPolicy;
