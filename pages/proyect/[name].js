import React from "react";
import { useRouter } from "next/router";

const Proyect = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <span>{ router.query.name }</span>
    </div>
  )
}

export default Proyect;