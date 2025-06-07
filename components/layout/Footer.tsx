import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-600 text-sm">{siteConfig.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">ナビゲーション</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">SNS</h4>
            <div className="flex space-x-4">
              <Link
                href={`https://twitter.com/${siteConfig.social.twitter}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Twitter
              </Link>
              <Link
                href={`https://github.com/${siteConfig.social.github}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;