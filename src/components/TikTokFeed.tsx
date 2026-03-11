import { Heart, MessageCircle, Share2, Music, Plus, Home, Search, Users, Inbox, User } from "lucide-react";

const mockVideos = [
  { user: "@viral_creator", desc: "Wait for it... 🔥 #fyp #viral", likes: "1.2M", comments: "24.5K", shares: "89K", song: "Original Sound - viral_creator" },
];

export function TikTokFeed() {
  const video = mockVideos[0];

  return (
    <div className="relative h-full w-full bg-background">
      {/* Simulated video background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/30" />
      
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center gap-6 pt-4 pb-2">
        <span className="text-muted-foreground text-sm font-semibold">Following</span>
        <span className="text-foreground text-sm font-bold border-b-2 border-foreground pb-1">For You</span>
      </div>

      {/* Right sidebar actions */}
      <div className="absolute right-3 bottom-32 z-10 flex flex-col items-center gap-5">
        <div className="relative">
          <div className="w-11 h-11 rounded-full bg-muted border-2 border-foreground overflow-hidden flex items-center justify-center">
            <User className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full tiktok-btn flex items-center justify-center">
            <Plus className="w-3 h-3 text-foreground" />
          </div>
        </div>
        
        <ActionButton icon={Heart} count={video.likes} />
        <ActionButton icon={MessageCircle} count={video.comments} />
        <ActionButton icon={Share2} count={video.shares} />

        <div className="w-9 h-9 rounded-full bg-muted border-2 border-muted-foreground/30 animate-spin" style={{ animationDuration: '3s' }}>
          <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
            <Music className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute left-3 bottom-24 z-10 max-w-[70%]">
        <p className="text-foreground font-bold text-sm mb-1">{video.user}</p>
        <p className="text-foreground/90 text-xs leading-relaxed">{video.desc}</p>
        <div className="flex items-center gap-1.5 mt-2">
          <Music className="w-3 h-3 text-foreground" />
          <p className="text-foreground/80 text-xs truncate">{video.song}</p>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/95 backdrop-blur-sm border-t border-border flex items-center justify-around py-2 px-1">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={Search} label="Discover" />
        <div className="flex items-center justify-center">
          <div className="w-11 h-7 rounded-lg overflow-hidden flex">
            <div className="w-1/2 h-full bg-[hsl(var(--tiktok-cyan))] rounded-l-lg" />
            <div className="w-1/2 h-full tiktok-btn rounded-r-lg -ml-1" />
          </div>
        </div>
        <NavItem icon={Inbox} label="Inbox" />
        <NavItem icon={User} label="Profile" />
      </div>
    </div>
  );
}

function ActionButton({ icon: Icon, count }: { icon: React.ElementType; count: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon className="w-7 h-7 text-foreground" />
      <span className="text-foreground text-[10px] font-medium">{count}</span>
    </div>
  );
}

function NavItem({ icon: Icon, label, active }: { icon: React.ElementType; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <Icon className={`w-5 h-5 ${active ? "text-foreground" : "text-muted-foreground"}`} />
      <span className={`text-[10px] ${active ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
    </div>
  );
}
