import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';

import Dialog from "../../ui/dialog";

export default function HelpDialog() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const key = "agentgpt-modal-opened-v0.2";
    const savedModalData = localStorage.getItem(key);

    setTimeout(() => {
      if (savedModalData == null) {
        setShow(true);
      }
    }, 1500);

    localStorage.setItem(key, JSON.stringify(true));
  }, []);

  const [t] = useTranslation();
  return (
    <Dialog
      inline
      open={show}
      setOpen={setShow}
      title="Welcome!"
      actions={
        <>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400"
            onClick={() => {
              setShow(false);
            }}
          >
            Get Started
          </button>
        </>
      }
    >
      <div>
        <p>
          CofoundAI is a revolutionary platform for AI development. It allows you to configure
          and deploy autonomous AI agents directly from your browser. These agents can interact
          with websites and people, browse the web, and even have long-term memory capabilities.
        </p>
        <br />
        <p className="mt-2 text-center font-bold">{t("FOLLOW_THE_JOURNEY", { ns: "help" })}</p>
        <div className="mt-4 flex w-full items-center justify-center gap-5">
          <div
            className="cursor-pointer rounded-full bg-slate-6 p-3 hover:bg-slate-8"
            onClick={() => window.open("https://www.icgnu.xyz/", "_blank")}
          >
            <FaDiscord size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-slate-6 p-3 hover:bg-slate-8"
            onClick={() =>
              window.open(
                "https://twitter.com/Djmcflush",
                "_blank"
              )
            }
          >
            <FaXTwitter size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-slate-6 p-3 hover:bg-slate-8"
            onClick={() => window.open("https://github.com/djmcflush/CofoundAIProd", "_blank")}
          >
            <FaGithub size={30} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
