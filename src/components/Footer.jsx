import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full border-t border-gray-300">
      <p className="py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} Forum, Inc. All rights reserved.
      </p>
    </footer>
  );
}
