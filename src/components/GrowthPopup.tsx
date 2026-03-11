import { X, Users, Heart, BadgeCheck, Zap, Gift, Star } from "lucide-react";

const rewards = [
  { value: "followers", label: "1,000 Followers", icon: Users, desc: "Real & active followers" },
  { value: "likes", label: "5,000 Likes", icon: Heart, desc: "Boost your engagement" },
  { value: "badge", label: "Verification Badge", icon: BadgeCheck, desc: "Get verified instantly" },
];

interface GrowthPopupProps {
  onClaim: (reward: string) => void;
  onClose: () => void;
}

export function GrowthPopup({ onClaim, onClose }: GrowthPopupProps) {
  return (
    <div className="absolute inset-0 z-30 flex items-end justify-center bg-background/60 backdrop-blur-sm">
      <div
        className="w-full bg-card rounded-t-3xl p-5 pb-8 border-t border-border"
        style={{ animation: "slide-up 0.4s ease-out" }}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            <Zap className="w-3 h-3" />
            LIMITED TIME OFFER
          </div>
          <h2 className="text-foreground text-xl font-extrabold tracking-tight">
            Free TikTok Growth 🚀
          </h2>
          <p className="text-muted-foreground text-xs mt-1">
            Choose your reward below — 100% free, no survey
          </p>
        </div>

        {/* Reward cards */}
        <div className="space-y-2.5 mb-5">
          {rewards.map((r) => (
            <button
              key={r.value}
              onClick={() => onClaim(r.value)}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-muted/60 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl tiktok-btn flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ animation: "pulse-glow 2s infinite" }}>
                <r.icon className="w-5 h-5 text-foreground" />
              </div>
              <div className="text-left flex-1">
                <p className="text-foreground text-sm font-bold">{r.label}</p>
                <p className="text-muted-foreground text-[11px]">{r.desc}</p>
              </div>
              <Gift className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-[10px]">
          <Star className="w-3 h-3 text-primary" />
          <span>12,847 users claimed rewards today</span>
        </div>
      </div>
    </div>
  );
}
