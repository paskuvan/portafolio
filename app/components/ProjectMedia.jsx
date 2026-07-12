// Shared media block: real image when provided, styled gradient placeholder otherwise.
export default function ProjectMedia({
  image,
  ratio,
  hue,
  alt = "",
  watermark = null,
  badge = null,
  hoverZoom = false,
}) {
  const zoom = hoverZoom
    ? "transition-transform duration-700 ease-out group-hover:scale-[1.04]"
    : "";

  return (
    <div className={`relative w-full overflow-hidden ${ratio} bg-bg-deep`}>
      {badge && (
        <span className="absolute right-0 top-0 z-10 bg-ink px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-bg-deep">
          {badge}
        </span>
      )}

      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover ${zoom}`}
        />
      ) : (
        <div
          className={`absolute inset-0 flex items-center justify-center ${zoom}`}
          style={{
            background: `radial-gradient(120% 120% at 20% 0%, hsl(${hue} 90% 60% / 0.9), hsl(${hue} 80% 30% / 0.85) 45%, hsl(${hue} 60% 8%) 100%)`,
          }}
        >
          {watermark && (
            <span className="display text-[3vw] text-white/25 max-lg:text-2xl">
              {watermark}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
