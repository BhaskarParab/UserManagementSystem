
function Login() {
  return (
    <>
      <div className="flex justify-center mt-70">
        <div className="bg-white">
          <div className="w-120 h-80 ml-0.5 mb-0.5 bg-black p-6">

            {/* Title */}
            <h1 className="text-white text-2xl font-semibold mb-6 text-center">
              Login
            </h1>

            {/* Form */}
            <form className="flex flex-col gap-8">

              <input
                type="email"
                placeholder="Email"
                className="p-2 bg-gray-200 text-black font-medium outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="p-2 bg-gray-200 text-black font-medium outline-none"
              />

              {/* Submit Button */}
              <div className="bg-gray-300 w-fit self-center mt-4">
                <button
                  type="submit"
                  className="
                    p-2 w-30 h-12 ml-0.5 mb-0.5 cursor-pointer
                    bg-black text-white font-semibold
                    hover:bg-gray-900
                    active:ml-0 active:mb-0
                    transition duration-200
                  "
                >
                  Login
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
