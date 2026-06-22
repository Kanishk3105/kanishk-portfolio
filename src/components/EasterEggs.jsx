import React, { useEffect } from "react";
import soundEffects from "../utils/soundEffects";
import { useDevToolsOpen } from "../utils/useDevToolsOpen";
import NyanCat from "./NyanCat";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  useEffect(() => {
    if (!isDevToolsOpen || typeof console === "undefined") return;

    console.clear();

    console.log(
      "%c👀 DevTools detected.",
      "color: #00BFFF; font-size: 24px; font-weight: bold; font-family: Arial, sans-serif;"
    );

    console.log(
      "%cAlright, you found the secret panel. Respect.",
      "color: #a855f7; font-size: 16px; font-weight: bold; font-family: Arial, sans-serif;"
    );

    const introTimeout = setTimeout(() => {
      console.log(
        "%cWelcome to Kanishk's portfolio control room.",
        "background-color: #111827; color: #fff; padding: 12px 16px; border-left: 5px solid #915EFF; font-size: 15px; font-weight: bold; border-radius: 6px;"
      );

      console.log(
        "%cTiny warning: this site may look serious, but the owner is probably thinking about design, code, and coffee at the same time.",
        "background-color: #FFFBEA; color: #D97706; padding: 12px 16px; border-left: 5px solid #FBBF24; font-size: 14px; border-radius: 6px;"
      );

      console.log(
        "%cSecret command: type KANISHK in the console and press Enter.",
        "background-color: #0f172a; color: #22d3ee; padding: 12px 16px; border-left: 5px solid #22d3ee; font-size: 14px; font-weight: bold; border-radius: 6px;"
      );
    }, 1500);

    if (!Object.hasOwn(window, "KANISHK")) {
      Object.defineProperty(window, "KANISHK", {
        configurable: true,
        get() {
          clearTimeout(introTimeout);
          console.clear();
          soundEffects?.playMagic?.();

          console.log(
            "%c✨ KANISHK MODE UNLOCKED ✨",
            "color: #915EFF; font-size: 30px; font-weight: bold; text-shadow: 0 0 12px rgba(145, 94, 255, 0.7);"
          );

          console.log(
            "%cWelcome, legend. You just unlocked the premium nonsense layer.",
            "color: #e5e7eb; font-size: 15px; font-family: Arial, sans-serif;"
          );

          console.log(
            "%cTip: if something breaks, blame the portfolio first. Then the CSS. Then the browser.",
            "background-color: #111827; color: #f9fafb; padding: 12px 16px; border-left: 5px solid #915EFF; font-size: 14px; border-radius: 6px;"
          );

          const moreFunTimeout = setTimeout(() => {
            console.log(
              "%cBonus quest: the real boss fight is making every section mobile-perfect.",
              "background-color: #ECFDF5; color: #047857; padding: 12px 16px; border-left: 5px solid #10B981; font-size: 14px; border-radius: 6px;"
            );
          }, 2000);

          window.__kanishkMode = true;
          return "KANISHK MODE ENABLED";
        },
      });
    }

    return () => {
      clearTimeout(introTimeout);
    };
  }, [isDevToolsOpen]);

  return <NyanCat />;
};

export default EasterEggs;