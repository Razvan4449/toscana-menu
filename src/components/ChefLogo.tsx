import Image from "next/image";

type ChefLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  priority?: boolean;
};

const sizes = {
  sm: 88,
  md: 140,
  lg: 220,
  hero: 300,
};

export default function ChefLogo({
  className = "",
  size = "md",
  priority = false,
}: ChefLogoProps) {
  const px = sizes[size];
  return (
    <div className={`relative ${className}`} style={{ width: px, height: px * 1.5 }}>
      <Image
        src="/vasilius-chef.png"
        alt="VASILIU’S chef mascot"
        fill
        priority={priority}
        sizes={`${px}px`}
        className="object-contain drop-shadow-[0_12px_30px_rgba(240,193,74,0.25)]"
      />
    </div>
  );
}
