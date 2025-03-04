import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-around w-full h-200 bg-white p-10  rounded-lg shadow-lg ">
          <h1 className="font-extrabold text-indigo-500 text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
            Welcome To Kuknos!
          </h1>
          <button
            className="w-40 lg:w-70 text-3xl sm:text-4xl py-3 px-4 shadow-xl hover:scale-105 hover:bg-indigo-600 bg-indigo-500 text-white   rounded-xl transition duration-300"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
