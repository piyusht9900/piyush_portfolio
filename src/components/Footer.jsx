import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer"className="py-16 px-4 text-center text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:bg-none dark:bg-gray-900">
      <div className="flex justify-center gap-4 mb-2">
        <a href="#" target="_blank" rel="noreferrer">
          <Github size={20} />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <Linkedin size={20} />
        </a>
      </div>
      <p>&copy; 2025 Piyush Thakur. All rights reserved.</p>
    </footer>
  );
}
