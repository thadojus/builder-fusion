import Link from 'next/link';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              ShopEase
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/category/clothing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Clothing
            </Link>
            <Link href="/category/electronics" className="text-gray-700 hover:text-gray-900 transition-colors">
              Electronics
            </Link>
            <Link href="/category/home" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
          </nav>

          <div className="flex items-center">
            <Link href="/cart" className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 8.32A2 2 0 005.36 23h13.28a2 2 0 002.04-1.68L19 13H7z" />
              </svg>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
