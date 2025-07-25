import { useRouter } from 'next/router';
import ProductList from '../../components/ProductList';
import productsData from '../../data/products.json';

export default function CategoryPage({ products, category }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center py-12">Loading...</div>;
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li>
              <span className="text-gray-900 font-medium">{categoryName}</span>
            </li>
          </ol>
        </nav>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {categoryName}
        </h1>
        <p className="text-gray-600">
          {products.length} product{products.length !== 1 ? 's' : ''} available
        </p>
      </div>

      {/* Filters Section (Basic) */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">
            Showing {products.length} results
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <ProductList products={products} />

      {/* Category Description */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          About {categoryName}
        </h2>
        <p className="text-gray-600">
          {getCategoryDescription(category)}
        </p>
      </div>
    </div>
  );
}

function getCategoryDescription(category) {
  const descriptions = {
    clothing: "Discover our latest collection of clothing including jackets, t-shirts, shoes, and accessories. Find the perfect style for any occasion with quality materials and comfortable fits.",
    electronics: "Explore cutting-edge electronics including smartphones, headphones, laptops, and speakers. Stay connected and entertained with the latest technology at competitive prices.",
    home: "Transform your living space with our home collection featuring coffee makers, yoga mats, and other essential items for modern living. Create the perfect atmosphere for relaxation and productivity."
  };
  
  return descriptions[category] || "Browse our curated selection of high-quality products in this category.";
}

export async function getStaticPaths() {
  // Get all unique categories from products
  const categories = [...new Set(productsData.map(product => product.category))];
  
  const paths = categories.map((category) => ({
    params: { category }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  
  // Filter products by category
  const products = productsData.filter(product => product.category === category);

  // Sort products by featured first, then by rating
  products.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.rating - a.rating;
  });

  return {
    props: {
      products,
      category
    }
  };
}
