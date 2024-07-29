
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
      <div className="flex w-[1216px] mx-auto justify-center items-center mt-96 mb-96">
        <div className="border-r border-gray-200">
          <p className="text-9xl mr-10">404</p>
        </div>
        <div className="flex flex-col gap-4 ml-10">
          <h2 className="text-4xl">Page Not Found</h2>
          <p className="text-2xl">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button className="bg-blue-300 w-[130px] rounded-lg">
             <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
  );
};

export default Notfound;
