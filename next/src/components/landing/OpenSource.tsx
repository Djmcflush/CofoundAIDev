import clsx from "clsx";
import React from "react";
import { FaGithub } from "react-icons/fa";

import { MacWindowInternal } from "../console/MacWindowHeader";
import PrimaryButton from "../PrimaryButton";

interface TerminalProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

const OpenSource = () => {
  return (
    <div className="min-h-[50vh] w-full">
      <div className="flex flex-row">
        <div className="relative hidden w-full md:flex">
          <Terminal className="absolute" title="index.ts">
            <pre className="overflow-x-hidden">
              {"" +
                "<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head>\n" +
                " <title>My CofoundAI Website</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "  <h1>Welcome to CofoundAI!</h1>\n" +
                "  <p>Explore the power of autonomous AI agents.</p>\n" +
                '  <script src="https://agentgpt.reworkd.ai/agentgpt.js"></script>\n' +
                "  <script>\n" +
                "    // Connect to CofoundAI API\n" +
                "    const agent = new CofoundAI();\n" +
                "    agent.connect('YOUR_API_KEY');\n" +
                "    \n" +
                "    // Example code to interact with CofoundAI\n" +
                "    agent.createAgent('MyAIAssistant');\n" +
                "    agent.setGoal('Sort my emails');\n" +
                "    agent.start();\n" +
                "  </script>\n" +
                "</body>\n" +
                "</html>\n"}
            </pre>
          </Terminal>
          <Terminal className="absolute left-16 top-20 z-10" title="agent_service.py">
            <pre className="overflow-x-hidden">
              {"import requests\n" +
                "\n" +
                "# Define the API endpoint\n" +
                'url = "https://api.agentgpt.example.com"\n' +
                "\n" +
                "# Make a GET request to retrieve data from the API\n" +
                "response = requests.get(url)\n" +
                "\n" +
                "# Process the response data\n" +
                "if response.status_code == 200:\n" +
                "    data = response.json()\n" +
                "    # Perform further actions with the data\n" +
                "    print(data)\n" +
                "else:\n" +
                '    print("Error: Unable to fetch data from the API")\n'}
            </pre>
          </Terminal>
        </div>
      </div>
    </div>
  );
};

const Terminal = (props: TerminalProps) => {
  return (
    <div
      className={clsx("w-3/4 max-w-md rounded-xl bg-neutral-800 drop-shadow-2xl", props.className)}
    >
      <MacWindowInternal>{props.title}</MacWindowInternal>
      <div className="h-72 overflow-hidden rounded-b-xl bg-neutral-900 p-4 text-[8pt] text-gray-400">
        {props.children}
      </div>
    </div>
  );
};

export default OpenSource;
