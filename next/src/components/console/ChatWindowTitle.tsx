import React from "react";

import type { GPTModelNames } from "../../types";
import { GPT_35_TURBO_16K, GPT_4 } from "../../types";

export const ChatWindowTitle = ({ model }: { model: GPTModelNames }) => {
  if (model === GPT_4) {
    return (
      <>
        CofoundAI<span className="text-amber-500">GPT-4</span>
      </>
    );
  }

  if (model === GPT_35_TURBO_16K) {
    return (
      <>
        CofoundAI
        <span className="text-neutral-400">
          GPT-3.5<span className="text-amber-500">-16K</span>
        </span>
      </>
    );
  }

  return (
    <>
      CofoundAI<span className="text-neutral-400">GPT-3.5</span>
    </>
  );
};
