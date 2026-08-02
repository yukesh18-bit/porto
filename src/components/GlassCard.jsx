import { motion } from "framer-motion";

export default function GlassCard({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="backdrop-blur-[35px] bg-white/8 border border-white/15 rounded-[36px] shadow-[0_20px_80px_rgba(124,58,237,.25)] overflow-hidden"
    >
      {children}
    </motion.div>
  );
}