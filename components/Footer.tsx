import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-obsidian">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-black tracking-tighter">
          SABARIYA<span className="text-brand">.</span>
        </div>
        
        <div className="text-gray-500 text-sm font-light">
          © {new Date().getFullYear()} Sabariya Muzumder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
