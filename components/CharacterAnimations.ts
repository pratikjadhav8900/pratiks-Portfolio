export type AnimationState = "idle" | "dance" | "wave" | "point" | "thumbsUp";

export interface AnimationConfig {
  name: AnimationState;
  clipName: string; // Used when loading GLB clip
  loop: boolean;
  fadeDuration: number;
}

export const ANIMATION_CONFIGS: Record<AnimationState, AnimationConfig> = {
  idle: {
    name: "idle",
    clipName: "Idle",
    loop: true,
    fadeDuration: 0.5,
  },
  dance: {
    name: "dance",
    clipName: "Dance",
    loop: true,
    fadeDuration: 0.4,
  },
  wave: {
    name: "wave",
    clipName: "Wave",
    loop: false,
    fadeDuration: 0.3,
  },
  point: {
    name: "point",
    clipName: "Point",
    loop: false,
    fadeDuration: 0.3,
  },
  thumbsUp: {
    name: "thumbsUp",
    clipName: "ThumbsUp",
    loop: false,
    fadeDuration: 0.3,
  },
};
