import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div
        className={`w-4 h-4 rounded-full mb-4 ${color}`}
      />

      <h2 className="text-4xl font-black text-white">
        {value}
      </h2>

      <p className="mt-2 text-gray-400">
        {title}
      </p>
    </motion.div>
  );
}