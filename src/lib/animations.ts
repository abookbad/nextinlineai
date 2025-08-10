export const durations = {
  short: 0.22,
  medium: 0.42,
};

export const ease = [0.22, 0.61, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: durations.medium, ease } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: durations.medium, ease } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: durations.medium, ease } },
};

export const staggerContainer = (stagger: number = 0.08) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.04,
    },
  },
});

export const parallaxFloat = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: [12, -6, 0],
    transition: { duration: 1.6, ease, times: [0, 0.6, 1] },
  },
};

export const sheenSweep = {
  hover: {
    transition: { duration: durations.short, ease },
  },
};


