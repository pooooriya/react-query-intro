import { useMutation } from "@tanstack/react-query";
import { AXIOS } from "../../config/axios";
import { QUERYKEYS } from "../queryKeys";

const mutationFn = (body: any) =>
  AXIOS.post("/login", body).then((res) => res.data);
const useLogin = () => {
  return useMutation({
    mutationFn,
    mutationKey: [QUERYKEYS.Login],
  });
};

export default useLogin;
