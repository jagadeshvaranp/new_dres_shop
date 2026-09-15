import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 2,
    minutes: 28,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="bg-[#1c3424] text-[#f2eee5] py-2 px-4 sm:px-8 text-[12px] sm:text-[13px] tracking-wide relative z-50 border-b border-[#2b4c37] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Timer */}
        <div className="flex items-center space-x-1 font-mono font-medium text-[#e3ded2] select-none">
          <span className="tabular-nums">{pad(timeLeft.days)}d</span>
          <span className="text-[#a4b8a9]">:</span>
          <span className="tabular-nums">{pad(timeLeft.hours)}h</span>
          <span className="text-[#a4b8a9]">:</span>
          <span className="tabular-nums">{pad(timeLeft.minutes)}m</span>
          <span className="text-[#a4b8a9]">:</span>
          <span className="tabular-nums">{pad(timeLeft.seconds)}s</span>
        </div>

        {/* Center: Promo Offer */}
        <div className="text-center font-normal tracking-wide text-white/95 truncate px-2">
          <span>25% off everything in our <strong className="font-semibold text-white">Private Sale</strong></span>
        </div>

        {/* Right: Close Action */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#a4b8a9] hover:text-white transition-colors p-1 -mr-1 rounded focus:outline-none focus:ring-1 focus:ring-white/30"
          aria-label="Close announcement"
          title="Dismiss announcement"
        >
          <X size={15} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
