import Link from 'next/link';
import ProductList from '../components/ProductList';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import AstroHeroSection from '../components/AstroHeroSection';

export default function Home({ featuredProducts, categories }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg overflow-hidden mb-12">
        <img
          src="https://images.pexels.com/photos/6969962/pexels-photo-6969962.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
          alt="Shopping Experience"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 flex items-center h-full p-8">
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
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mb-12">
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

      {/* Astro Hero Section (from design) */}
      <AstroHeroSection />

      {/* Categories Section moved below Astro section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categoryData = categoriesData[category.name];
            return (
              <Link
                key={category.name}
                href={`/category/${category.name}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={categoryData?.image || 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'}
                      alt={categoryData?.name || category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {categoryData?.name || category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                    </h3>
                    <p className="text-gray-600">
                      {category.count} products available
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
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
