type ProjectImageProps = {
  src?: string;
  alt: string;
  label?: string;
};

export function ProjectImage({ src, alt, label = "Project Preview" }: ProjectImageProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-blush p-6 sm:p-8">
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-card shadow-xl transition-transform duration-300 ease-out group-hover:scale-[1.02]">
        <div className="flex shrink-0 items-center gap-1.5 border-b border-ink/10 px-3 py-2.5" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-pink-deep" />
          <span className="h-1.5 w-1.5 rounded-full bg-pink-deep/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-pink-deep/30" />
          <span className="ml-2 h-3 flex-1 rounded-full bg-ink/5" />
        </div>
        <div className="relative min-h-0 flex-1 bg-card">
          {src ?
          <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" /> :

          <div role="img" aria-label={`${alt} — preview coming soon`} className="absolute inset-0 grid place-items-center">
              <span className="font-display text-lg italic text-ink/60">{label}</span>
            </div>
          }
        </div>
      </div>
    </div>);

}