const StatusBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-[#ecfdf5] text-[#065f46] px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border border-[#d1fae5] w-fit">
  {/* Dot wrapper with a relative positioning for the ping effect */}
  <span className="relative flex h-2 w-2">
    {/* Expanding glow ring */}
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
    {/* Solid center dot */}
    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
  </span>
  Open to Work
</div>
  )
}

export default StatusBadge