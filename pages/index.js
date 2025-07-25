import Link from 'next/link';
import ProductList from '../components/ProductList';
import productsData from '../data/products.json';

export default function Home({ featuredProducts, categories }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to ShopEase
          </h1>
          <p className="text-xl mb-6">
            Discover amazing products at unbeatable prices. Shop the latest in clothing, electronics, and home goods.
          </p>
          <Link
            href="/category/electronics"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                  </h3>
                  <p className="text-gray-600">
                    {category.count} products available
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <Link
            href="/category/electronics"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All
          </Link>
        </div>
        <ProductList products={featuredProducts} />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  // Get featured products
  const featuredProducts = productsData.filter(product => product.featured);
  
  // Get categories with product counts
  const categoryMap = {};
  productsData.forEach(product => {
    if (categoryMap[product.category]) {
      categoryMap[product.category]++;
    } else {
      categoryMap[product.category] = 1;
    }
  });
  
  const categories = Object.entries(categoryMap).map(([name, count]) => ({
    name,
    count
  }));

  return {
    props: {
      featuredProducts,
      categories
    }
  };
}
