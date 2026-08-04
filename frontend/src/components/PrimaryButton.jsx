import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function PrimaryButton({
  children,
   onClick,
}) {
  return (
    <motion.button
  whileHover={{
    scale: 1.03,
  }}
  whileTap={{
    scale: 0.96,
  }}
  onClick={onClick}
  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(139,92,246,.5)] transition-all duration-500 hover:scale-[1.02]"
>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}

        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
      </span>
    </motion.button>
  );
}