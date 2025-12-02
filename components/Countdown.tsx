
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // December 31st, 2025 at midnight PST (GMT-0800)
      const targetDate = new Date('2025-12-31T00:00:00-08:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return null;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="bg-brand-dark text-white py-2 px-4 text-center font-sans text-xs md:text-sm tracking-widest uppercase border-b border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
        <span className="font-semibold text-brand-gold">Exclusive Holiday Sale Ends In:</span>
        <div className="flex gap-4">
          <div>
            <span className="font-bold">{String(timeLeft.days).padStart(2, '0')}</span> <span className="text-white/50 text-[10px]">Days</span>
          </div>
          <div>
            <span className="font-bold">{String(timeLeft.hours).padStart(2, '0')}</span> <span className="text-white/50 text-[10px]">Hrs</span>
          </div>
          <div>
            <span className="font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span> <span className="text-white/50 text-[10px]">Mins</span>
          </div>
          <div>
            <span className="font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span> <span className="text-white/50 text-[10px]">Secs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;