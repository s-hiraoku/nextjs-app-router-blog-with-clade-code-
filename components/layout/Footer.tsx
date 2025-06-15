import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {siteConfig.name}
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <div 
                className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                aria-hidden="true"
              ></div>
              <span>オンライン</span>
            </div>
          </div>
          
          {/* Navigation section */}
          <div>
            <h4 className="font-semibold mb-6 text-white">ナビゲーション</h4>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social section */}
          <div>
            <h4 className="font-semibold mb-6 text-white">SNS</h4>
            <div className="space-y-4">
              <Link
                href={`https://twitter.com/${siteConfig.social.twitter}`}
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitterでフォローする"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300" aria-hidden="true">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Twitterアイコン">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span>Twitter</span>
              </Link>
              <Link
                href={`https://github.com/${siteConfig.social.github}`}
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHubでフォローする"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300" aria-hidden="true">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="GitHubアイコン">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <Link 
                href="/privacy" 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                プライバシーポリシー
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                利用規約
              </Link>
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <span className="text-red-400 animate-pulse" aria-hidden="true">♥</span>
                <span>& Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;