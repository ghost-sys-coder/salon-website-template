import type { LucideIcon } from "lucide-react";

export default function PillarCard({
  Icon,
  label,
  desc,
}: {
  Icon: LucideIcon;
  label: string;
  desc: string;
}) {
  return (
    <div className="bg-cream-50 p-5 flex flex-col gap-1.5">
      <Icon size={16} className="text-gold mb-1" />
      <span className="text-obsidian text-sm font-light tracking-wide">
        {label}
      </span>
      <span className="text-warm-muted text-xs font-light">{desc}</span>
    </div>
  );
}
