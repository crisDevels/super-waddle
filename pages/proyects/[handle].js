import React from "react";
import { useRouter } from "next/router";
import { useAPI } from "../../hooks/useAPI";

const Proyect = () => {
  const router = useRouter();
  
  const { data, isError, isLoading } = useAPI(`/api/projects/${router.query.handle}`)

  if (isLoading) return <div>...</div>
  if (isError) return <div>Not found</div>

  return (
    <div>
      <span>{ data.name }</span>
    </div>
  )
}

export default Proyect;