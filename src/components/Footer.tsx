const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <img
                src="/tadeo-logo-white.webp"
                alt="Tadeo Services"
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                Tadeo Services LLC
              </span>
            </div>
            <p className="text-zinc-500 text-sm mt-1">
              Don't put off tomorrow what you can get done Tadeo!
            </p>
          </div>
          <div className="flex space-x-6">
            <div className="mt-8 text-center text-zinc-600 text-sm">
              &copy; {new Date().getFullYear()} Tadeo Services LLC. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
