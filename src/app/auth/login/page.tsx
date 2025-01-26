'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from "react-hook-form";
// import login from '../../assets/images/login.png'
// import lotusLogo from '../../assets/images/logo2x 1.png'
import { RoundedTextField } from "../../../components/input/Input";
import { RButton } from '../../../components/nav/Button'

// import { formProvider, useForm } from 'react-hook-form';
// type LoginInput = {
//     first_name: string;
//     last_name: string;
//     email: string;
//     password: string;
//     confirm_password: string;
//     consent: string;
// }

const SignUpPage = () => {
  const methods = useForm();

  return (
    <div className="flex h-screen w-[1440px]">
      {/* Left Section */}
      <div className="w-[932px] h-screen bg-gray-200 flex items-center justify-center relative">
        <div className="h-full w-full overflow-hidden">
          <div className="h-full relative">
            <Image
              src="/assets/images/login.png"
              alt="Welcome"
              className="inset-0 w-full h-full object-cover"
              objectFit="cover"
              layout="fill"
            />
            <div className="top-0 w-full h-full absolute bg-gradient-to-t from-[#000000] to-[#FFFFFF] z-10 opacity-[0.5]"></div>
          </div>


          <div className="absolute top-[44px] left-[70px] z-10 p-0 text-left text-white">
            <Image
              src="/assets/images/logo2x 1.png"
              alt="lotus capital investment"
              className="inline w-[170px] h-[34px] relative"
              width={170}
              height={34}
            />
          </div>
        </div>

        <div className="absolute z-10 p-0 text-left text-white bottom-[120px] left-[71px] w-[482px] leading-10">
          <h1 className="text-[41.4px] font-bold mb-4 leading-10">Consolidate & grow</h1>
          <p className="text-[41.4px] leading-snug leading-10">
            their investment portfolio in a structured manner.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[508px] flex flex-col justify-center items-center bg-[rgba(240, 240, 240, 1)]">
        <div className="w-full max-w-md px-[30px]">
          <h1 className="text-[16px] font-bold mb-2 text-gray-800">
            Welcome back!
          </h1>
          <h2 className="text-[42px] font-[700] text-500 text-[#BF0401] font-semibold mb-2">Login</h2>
          <p className="font-[400] text-gray-600 mb-6">
            Enter your details to access your account.
          </p>
          <form>

            <RoundedTextField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              control={methods.control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Enter a valid email address",
                },
              }}
            />


            <RoundedTextField
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="••••••••"
              control={methods.control}
            />


            <div className="w-full flex items-stretch justify-between mb-9 mt-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                />
                <label
                  htmlFor="consent"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me

                </label>
              </div>

              <div><a className="text-gray-300 hover:underline text-sm" href="#">Reset password</a></div>

            </div>

            <div className="space-y-4">
              <RButton fullWidth>Login</RButton>
            </div>
          </form>

          <p className="text-sm text-gray-600 mt-6">
            Click{" "}
            <Link href="/" className="text-red-500 font-medium hover:underline">
                here
            </Link>{" "}
            <span>to signup if you don&lsquo;t have an account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;