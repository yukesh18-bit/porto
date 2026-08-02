import { motion } from "framer-motion";

export default function GradientBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080B1A]">

      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-violet-500/30 blur-[140px]"
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-[160px]"
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          y: [0, 80, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 w-[420px] h-[420px] rounded-full bg-pink-500/20 blur-[120px]"
      />

      {/* Aurora 4 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-20 w-[300px] h-[300px] rounded-full bg-indigo-400/20 blur-[100px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}