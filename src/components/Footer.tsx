export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/5 py-8 px-6 md:px-12 bg-slate-50 dark:bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 text-center md:text-left">
          &copy; 2026 Atharva Nagarsekar &middot; Mumbai, India &middot; Aspiring Future Captain
        </p>
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.linkedin.com/in/atharva-nagarsekar-9699a9207" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
            LinkedIn
          </a>
          <a href="nagarsekaratharva@gmail.com" className="text-sm font-medium text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
            Email
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
