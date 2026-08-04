
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function InputField({
  
  label,
  type,
  placeholder,
  icon,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300 font-medium">
        {label}
      </label>

      <motion.div
        whileFocus={{ scale: 1.02 }}
        className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 transition-all duration-300 hover:border-violet-400 focus-within:border-violet-500 focus-within:shadow-[0_0_30px_rgba(139,92,246,.35)]"
      >
        <div className="text-violet-300 text-xl">
          {icon}
        </div>

        <input
  type={
         type === "password"
         ? showPassword
        ? "text"
        : "password"
      : type
  }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none text-white w-full placeholder:text-gray-500"
        />
        {type === "password" && (
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="text-gray-400 hover:text-white"
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
)}
      </motion.div>
    </div>
    
  );
}