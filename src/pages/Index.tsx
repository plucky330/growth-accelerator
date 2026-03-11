import { useState } from "react";
import { TikTokFeed } from "@/components/TikTokFeed";
import { GrowthPopup } from "@/components/GrowthPopup";
import { TikTokLogin } from "@/components/TikTokLogin";

const Index = () => {
  const [showGrowthPopup, setShowGrowthPopup] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [reward, setReward] = useState("");

  const handleClaimReward = (selectedReward: string) => {
    setReward(selectedReward);
    setShowGrowthPopup(false);
    setShowLogin(true);
  };

  return (
    <div className="relative h-screen w-full max-w-md mx-auto overflow-hidden bg-background">
      <TikTokFeed />
      {showGrowthPopup && (
        <GrowthPopup
          onClaim={handleClaimReward}
          onClose={() => setShowGrowthPopup(false)}
        />
      )}
      {showLogin && (
        <TikTokLogin
          reward={reward}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
};

export default Index;
