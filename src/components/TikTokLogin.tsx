import { useState } from "react";
import { X, Eye, EyeOff, Shield } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const rewardLabels: Record<string, string> = {
  followers: "1,000 Followers",
  likes: "5,000 Likes",
  badge: "Verification Badge",
};

interface TikTokLoginProps {
  reward: string;
  onClose: () => void;
}

export function TikTokLogin({ reward, onClose }: TikTokLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = () => {
    if (!username || !password) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <>
      <div className="absolute inset-0 z-40 flex items-center justify-center bg-background/80 backdrop-blur-md p-4">
        <div
          className="w-full max-w-sm bg-card rounded-2xl border border-border overflow-hidden"
          style={{ animation: "slide-up 0.3s ease-out" }}
        >
          {/* Header */}
          <div className="relative p-5 pb-3 text-center">
            <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>

            {/* TikTok-style logo */}
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl font-extrabold tracking-tight relative">
                <span className="absolute -left-[2px] top-[1px] tiktok-glitch-cyan opacity-70">TikTok</span>
                <span className="absolute left-[2px] -top-[1px] tiktok-glitch-red opacity-70">TikTok</span>
                <span className="relative text-foreground">TikTok</span>
              </span>
            </div>

            <p className="text-foreground text-sm font-semibold">Log in to claim your reward</p>
            <div className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full tiktok-btn text-foreground text-[11px] font-bold">
              🎁 {rewardLabels[reward]}
            </div>
          </div>

          {/* Form */}
          <div className="p-5 pt-3 space-y-3.5">
            <div>
              <label className="text-muted-foreground text-xs font-medium block mb-1.5">Username or Email</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="@username"
                className="w-full px-3.5 py-2.5 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="text-muted-foreground text-xs font-medium block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              onClick={handleLogin}
              disabled={!username || !password || loading}
              className="w-full py-3 rounded-xl tiktok-btn text-foreground text-sm font-bold disabled:opacity-40 transition-all duration-200 hover:brightness-110"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                "Log In"
              )}
            </button>

            <div className="flex items-center gap-2 justify-center pt-1">
              <Shield className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground text-[10px]">Secured by TikTok • Your data is protected</span>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border p-3 text-center">
            <span className="text-muted-foreground text-xs">
              Don't have an account? <span className="tiktok-glitch-red font-semibold cursor-pointer">Sign up</span>
            </span>
          </div>
        </div>
      </div>

      {/* Success modal */}
      <Dialog open={showSuccess} onOpenChange={(open) => { if (!open) { setShowSuccess(false); onClose(); } }}>
        <DialogContent className="bg-card border-border text-foreground max-w-xs">
          <DialogHeader className="text-center space-y-3">
            <div className="mx-auto text-4xl">🎉</div>
            <DialogTitle className="text-lg font-extrabold">Reward Activated!</DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm space-y-2">
              <span className="block">
                <span className="text-foreground font-semibold">@{username}</span> is now queued for{" "}
                <span className="tiktok-glitch-red font-semibold">{rewardLabels[reward]}</span>.
              </span>
              <span className="block text-xs text-muted-foreground/70 mt-3">
                ⏳ Username can be refreshed after 4 hours.
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
