// Simple wrapper for card glow effect
export default function GlowCard({ children }) {
  return (
    <div className="rounded-xl border border-[#2c2c3d] hover:border-violet-500 transition-all duration-300 p-1">
      {children}
    </div>
  );
}
