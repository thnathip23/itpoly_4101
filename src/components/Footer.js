import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Faculty of Technology, Chiang Mai Technical College. All Rights Reserved.</p>
        <div className="mt-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-400 hover:underline"
          >
            Facebook
          </a>
          |
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-400 hover:underline"
          >
            Twitter
          </a>
          |
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-pink-400 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
