import React, { useState, useEffect } from "react";
import { PRELIM_DEADLINE } from "../data/eventData";

const pad = (n: number) => String(n).padStart(2, "0");

// 計算距離截止時間的剩餘天、時、分、秒
function getRemaining() {
  const diff = Math.max(0, PRELIM_DEADLINE.getTime() - Date.now());
  return {
    done: diff === 0,
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

export const DeadlineCountdown: React.FC = () => {
  const [left, setLeft] = useState(getRemaining);

  // 每秒更新一次，截止後停止計時
  useEffect(() => {
    if (left.done) return;
    const timer = setInterval(() => setLeft(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, [left.done]);

  const units = [
    { value: String(left.days), label: "天" },
    { value: pad(left.hours), label: "時" },
    { value: pad(left.minutes), label: "分" },
    { value: pad(left.seconds), label: "秒" },
  ];

  return (
    <section className="countdown-wrapper" id="countdown" aria-label="初賽截止倒數計時">
      <h2 className="countdown-title">初賽截止倒數</h2>
      <p className="countdown-subtitle">報名與初賽檔案繳交截止：2026/11/30 23:59</p>

      {left.done ? (
        <p className="countdown-closed">初賽報名與繳件已截止，感謝各隊踴躍參與！</p>
      ) : (
        <div className="countdown-grid" role="timer">
          {units.map((unit) => (
            <div className="countdown-unit" key={unit.label}>
              <span className="countdown-value">{unit.value}</span>
              <span className="countdown-label">{unit.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
