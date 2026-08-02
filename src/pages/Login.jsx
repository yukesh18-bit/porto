import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaGraduationCap,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Login() {
  return (
    <GradientBackground>

      <div className="min-h-screen flex items-center justify-center px-6">

        <GlassCard>

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-14 text-white">

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center text-4xl shadow-[0_0_35px_rgba(139,92,246,.6)]">

                  <FaGraduationCap />

                </div>

                <h1 className="mt-8 text-6xl font-black leading-tight">

                  Acadfolio AI

                </h1>

                <p className="mt-6 text-gray-300 text-lg leading-8 max-w-md">
                   Create a modern academic portfolio that show your
                    certificates, projects and achievements with AI-powered
                         resume generation and smart sharing.
                </p>
                

              </motion.div>

              <div className="grid grid-cols-2 gap-5 mt-12">

                <div className="rounded-2xl bg-white/5 p-5 border border-white/10 hover:border-violet-400 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 cursor-pointer">

                  <h2 className="text-4xl font-bold">

                    25K+

                  </h2>

                  <p className="text-gray-400">

                    Students

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-5 border border-white/10 hover:border-violet-400 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 cursor-pointer">

                  <h2 className="text-4xl font-bold">

                    120K+

                  </h2>

                  <p className="text-gray-400">

                    Certificates

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-5 border border-white/10 hover:border-violet-400 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 cursor-pointer">

                  <h2 className="text-4xl font-bold">

                    AI

                  </h2>

                  <p className="text-gray-400">

                    Resume Builder

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-5 border border-white/10 hover:border-violet-400 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 cursor-pointer">

                  <h2 className="text-4xl font-bold">

                    QR

                  </h2>

                  <p className="text-gray-400">

                    Portfolio Share

                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-[#0d111f]/70 backdrop-blur-xl p-14 rounded-r-[32px]">

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >

                <h2 className="text-white text-5xl font-bold">

                  Welcome Back 

                </h2>

                 <p className="text-gray-400 mt-3 text-lg leading-7">
                     Sign in to access your AI-powered  portfolio.
                </p>

                <div className="mt-10 space-y-6">

                  <InputField
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon={<FaEnvelope />}
                  />

                  <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    icon={<FaLock />}
                  />

                  <PrimaryButton>

                    Sign In

                  </PrimaryButton>

                </div>

                <div className="mt-10 flex justify-between text-sm">

                  <span className="text-gray-400">

                    Forgot Password?

                  </span>

                <Link
                    to="/register"
                       className="text-violet-400 hover:text-violet-300 transition"
                    >
                             Create Account
                             </Link>

                </div>

              </motion.div>

            </div>

          </div>

        </GlassCard>

      </div>

    </GradientBackground>
  );
}