import { Link } from "react-router-dom";
import { useGetDogs } from "../../../services/queries/useGetDogs";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { QUERYKEYS } from "../../../services/queryKeys";

const HomePage: React.FC = () => {
  const query = useQueryClient();

  const [state, setState] = useState(1);
  const { data, isLoading, isError } = useGetDogs(state);

  if (isLoading) return <>Loading ...</>;
  if (isError) return <>Error ...</>;

  return (
    <>
      <img src={data?.message} height={500} width={500} />
      <Link to="/about">HomePage</Link>
      <button onClick={() => setState((prev) => prev + 1)}>Click Me</button>
    </>
  );
};

export default HomePage;
