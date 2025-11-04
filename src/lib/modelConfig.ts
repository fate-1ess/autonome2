// Model configuration for display
export const MODEL_INFO: Record<
  string,
  { logo: string; color: string; label: string }
> = {
  // "deepseek-r1t2": {
  //   logo: "https://nof1.ai/logos_white/deepseek_logo.png",
  //   color: "#4D6BFE",
  //   label: "DeepSeek R1T2",
  // },  
  "deepseek-v3.1-terminus": {
    logo: "https://nof1.ai/logos_white/deepseek_logo.png",
    color: "#4D6BFE",
    label: "DeepSeek V3.1 Terminus",
  },
  "claude-sonnet-4.5": {
    logo: "https://nof1.ai/logos_white/Claude_logo.png",
    color: "#FF6B35",
    label: "Claude Sonnet 4.5",
  },
  "grok-4": {
    logo: "https://nof1.ai/logos_white/Grok_logo.webp",
    color: "#000000",
    label: "Grok 4",
  },
  "qwen3-max": {
    logo: "https://nof1.ai/logos_white/qwen_logo.png",
    color: "#8B5CF6",
    label: "Qwen3 Max",
  },
};

// Get model info with fallback for unknown models
export function getModelInfo(modelName: string): {
  logo: string;
  color: string;
  label: string;
} {
  // Try direct lookup (case-sensitive)
  if (MODEL_INFO[modelName]) {
    return MODEL_INFO[modelName];
  }

  // Try lowercase lookup
  const lowerCase = modelName.toLowerCase();
  if (MODEL_INFO[lowerCase]) {
    return MODEL_INFO[lowerCase];
  }

  // Try normalized version (replace spaces/underscores/dots with hyphens)
  const normalized = modelName.toLowerCase().replace(/[_\s.]+/g, "-");
  if (MODEL_INFO[normalized]) {
    return MODEL_INFO[normalized];
  }

  // Try with underscores
  const underscored = modelName.toLowerCase().replace(/[-\s.]+/g, "_");
  if (MODEL_INFO[underscored]) {
    return MODEL_INFO[underscored];
  }

  // Fallback for unknown models
  return {
    logo: "",
    color: "#888888",
    label: modelName,
  };
}
