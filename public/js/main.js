document.addEventListener("DOMContentLoaded", () => {
    let audioCtx = null;

    // Helper to get or resume the Audio Context
    const getAudioContext = () => {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) audioCtx = new AudioContext();
        }
        if (audioCtx && audioCtx.state === "suspended") {
            audioCtx.resume();
        }
        return audioCtx;
    };

    // 1. Web Audio API Sound Generator
    const playHudBeep = (freq = 600, duration = 0.05) => {
        try {
            const ctx = getAudioContext();
            if (!ctx) return;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            
            // Subtle volume
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {
            console.warn("Audio feedback error:", e);
        }
    };

    // Unlock Audio Context on first click anywhere on the page
    document.addEventListener("click", () => getAudioContext(), { once: true });

    // Attach click audio triggers to buttons and links
    document.querySelectorAll(".hud-btn, .quest-card, .quest-link").forEach(element => {
        element.addEventListener("mouseenter", () => playHudBeep(450, 0.03));
        element.addEventListener("click", () => playHudBeep(750, 0.06));
    });

    // 2. Dynamic Progress Bar Entrance Animation
    const fills = document.querySelectorAll(".progress-bar .fill");
    fills.forEach(fill => {
        const targetWidth = fill.style.width;
        fill.style.width = "0%";
        setTimeout(() => {
            fill.style.width = targetWidth;
        }, 200);
    });
});

