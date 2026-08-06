import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUniversity,
  FaBook,
  FaEnvelope,
  FaLock,
  FaGraduationCap,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

const [name, setName] = useState("");
const [college, setCollege] = useState("");
const [department, setDepartment] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const handleRegister = async () => {
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    await axios.post("https://your-render-backend-1.onrender.com/api/auth/register", {
      name,
      college,
      department,
      email,
      password,
    });

    alert("Registration Successful");
    navigate("/login");
  } catch (err) {
    alert(err.response?.data?.message || "Registration Failed");
  }
};
  return (
    <GradientBackground>
      <div className="min-h-screen flex items-center justify-center px-6 py-10">

        <GlassCard>

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-14 text-white">

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >

                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center text-5xl shadow-[0_0_35px_rgba(139,92,246,.6)]">

                  <FaGraduationCap />

                </div>

                <h1 className="mt-8 text-6xl font-black">

                  Join Acadfolio AI

                </h1>

                <p className="mt-2 text-violet-300 font-medium">
                  Academic Portfolio Builder
                </p>

                <p className="mt-6 text-gray-300 text-lg leading-8 max-w-md">
                  Create your professional academic portfolio,
                  upload certificates, showcase projects,
                  and build your AI-powered resume.
                </p>

              </motion.div>

              <div className="mt-12 grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h2 className="text-3xl font-bold">AI</h2>
                  <p className="text-gray-400">Resume</p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h2 className="text-3xl font-bold">PDF</h2>
                  <p className="text-gray-400">Export</p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h2 className="text-3xl font-bold">QR</h2>
                  <p className="text-gray-400">Share</p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h2 className="text-3xl font-bold">ATS</h2>
                  <p className="text-gray-400">Friendly</p>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-[#0d111f]/70 backdrop-blur-xl p-14 rounded-r-[36px]">

              <h2 className="text-white text-5xl font-extrabold">
                Create Account
              </h2>

              <p className="text-gray-400 mt-3 text-lg">
                Start building your portfolio today.
              </p>

              <div className="mt-10 space-y-5">

                <InputField
  label="Full Name"
  type="text"
  placeholder="Enter your name"
  icon={<FaUser />}
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

 <InputField
  label="College"
  type="text"
  placeholder="College Name"
  icon={<FaUniversity />}
  value={college}
  onChange={(e) => setCollege(e.target.value)}
/>
                <InputField
  label="Department"
  type="text"
  placeholder="Department"
  icon={<FaBook />}
  value={department}
  onChange={(e) => setDepartment(e.target.value)}
/>

               <InputField
  label="Email"
  type="email"
  placeholder="Enter email"
  icon={<FaEnvelope />}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

                <InputField
  label="Password"
  type="password"
  placeholder="Create password"
  icon={<FaLock />}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

                <InputField
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm password"
                  icon={<FaLock />}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <PrimaryButton onClick={handleRegister}>
                  Create Portfolio
                </PrimaryButton>

                <div className="relative my-6">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-white/10"></div>
  </div>

  <div className="relative flex justify-center">
    <span className="bg-[#0d111f] px-4 text-sm text-gray-400">
      OR
    </span>
  </div>
</div>

<button
  onClick={() => alert("Google Sign Up Coming Soon")}
  className="w-full flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 text-white hover:bg-white/10 transition"
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google"
    className="w-6 h-6"
  />
  Continue with Google
</button>

                <div className="text-center text-gray-400 mt-4">
                  Already have an account?
                   <Link
                      to="/login"
                      className="text-violet-400 ml-2 hover:underline"
                   >
                        Sign In
                    </Link>
                </div>

              </div>

            </div>

          </div>

        </GlassCard>

      </div>
    </GradientBackground>
  );
}