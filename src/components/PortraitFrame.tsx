import { PORTRAIT_URL } from "../data/portfolio";

type PortraitFrameProps = {
  badge: string;
  badgeSide: "left" | "right";
  className?: string;
};

export function PortraitFrame({ badge, badgeSide, className = "" }: PortraitFrameProps) {
  return (
    <div className={`relative aspect-[4/5] w-full max-w-sm ${className}`}>
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-ink" aria-hidden />
      <img
        src={PORTRAIT_URL}
        alt="Walaa Mahmoud"
        className="relative h-full w-full rounded-[2.5rem] object-cover object-top shadow-soft" />
      
      <div
        className={`absolute rounded-2xl bg-pink px-5 py-4 shadow-soft ${
        badgeSide === "left" ? "-bottom-6 -left-6" : "-bottom-5 -right-5"}`
        }>
        
        <p className="font-display text-lg italic text-ink">{badge}</p>
      </div>
    </div>);

}