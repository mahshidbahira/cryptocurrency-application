import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/Auth/useAuth";
import useAuthLogin from "../hooks/Auth/useAuthLogin";
import "../index.css";
import ReusableForm from "../components/Form/Form";

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const auth = useAuth();
  const { login, error } = useAuthLogin();

  useEffect(() => {
    if (auth) {
      navigate("/walletCreation");
    }
  }, [auth]);

  const onSubmit = (data: LoginFormInputs) => {
    login(data.username, data.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-8 lg:px-12">
      <div className="bg-white p-4 sm:p-10 lg:p-12 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">
          Login
        </h2>
        {error && (
          <p className="text-red-500 text-center mb-6">{error.message}</p>
        )}

        <ReusableForm<LoginFormInputs>
          onSubmit={onSubmit}
          submitText="Login"
          fields={[
            {
              name: "username",
              type: "text",
              label: "Username",
              placeholder: "Enter your username",
              validation: {
                required: "Username is required",
                minLength: { value: 3, message: "At least 3 characters" },
              },
            },
            {
              name: "password",
              type: "password",
              label: "Password",
              placeholder: "Enter your password",
              validation: {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              },
            },
          ]}
        />
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-indigo-500 hover:underline">
            Forgot your password?
          </a>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-indigo-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
