import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles, Users, Heart, BadgeCheck } from "lucide-react";

const rewards = [
  { value: "followers", label: "1,000 Followers", icon: Users },
  { value: "likes", label: "5,000 Likes", icon: Heart },
  { value: "badge", label: "Verification Badge", icon: BadgeCheck },
];

export function GrowthCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reward, setReward] = useState("");
  const [showModal, setShowModal] = useState(false);

  const selectedReward = rewards.find((r) => r.value === reward);

  const handleActivate = () => {
    if (!username || !password || !reward) return;
    setShowModal(true);
  };

  return (
    <>
      <Card className="relative w-full max-w-md border-border/50 bg-card/80 backdrop-blur-xl glow-primary">
        <div className="absolute inset-0 rounded-[var(--radius)] gradient-border opacity-40 pointer-events-none" />
        <CardHeader className="text-center space-y-2 relative">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-2">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-display text-2xl font-bold tracking-tight">
            Social Media Growth Tool – Demo
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Unlock followers, likes, and verification instantly.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5 relative">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-medium text-foreground/80">Username</Label>
            <Input
              id="username"
              placeholder="@yourhandle"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-input/50 border-border/60 focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-input/50 border-border/60 focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground/80">Select Reward</Label>
            <Select value={reward} onValueChange={setReward}>
              <SelectTrigger className="bg-input/50 border-border/60 focus:border-primary focus:ring-primary/20">
                <SelectValue placeholder="Choose your reward" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {rewards.map((r) => (
                  <SelectItem key={r.value} value={r.value} className="focus:bg-primary/10 focus:text-foreground">
                    <span className="flex items-center gap-2">
                      <r.icon className="h-4 w-4 text-primary" />
                      {r.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleActivate}
            disabled={!username || !password || !reward}
            className="w-full font-display font-semibold text-base bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all duration-300 disabled:opacity-40 disabled:shadow-none"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Activate Growth
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-card border-border text-foreground max-w-sm">
          <DialogHeader className="text-center space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              {selectedReward && <selectedReward.icon className="h-7 w-7 text-primary" />}
            </div>
            <DialogTitle className="font-display text-xl">Growth Activated!</DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm space-y-2">
              <span className="block">
                <span className="text-foreground font-medium">@{username}</span> has been queued for{" "}
                <span className="text-primary font-medium">{selectedReward?.label}</span>.
              </span>
              <span className="block text-xs mt-3 text-muted-foreground/70">
                Username can be refreshed after 4 hours.
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
