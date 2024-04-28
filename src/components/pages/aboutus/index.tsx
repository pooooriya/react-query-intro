import { Link } from "react-router-dom";
import useLogin from "../../../services/mutations/useLogin";
import { useState } from "react";

const AboutUs: React.FC = (): JSX.Element => {
  const [state, setState] = useState<any>();

  const loginMutation = useLogin();

  const handleOnChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (loginMutation.isPending) return;
    loginMutation.mutate(state, {
      onSuccess: () => {
        alert("success");
      },
      onError: () => {
        alert("failed");
      },
    });
  };

  return (
    <>
      <div>About Us</div>
      <Link to="/">HomePage</Link>

      <input name="email" type="email" onChange={handleOnChange} />
      <input name="password" type="password" onChange={handleOnChange} />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
};

export default AboutUs;
