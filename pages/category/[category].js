import { useRouter } from 'next/router';
import ProductList from '../../components/ProductList';
import productsData from '../../data/products.json';
import categoriesData from '../../data/categories.json';

export default function CategoryPage({ products, category, categoryInfo }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center py-12">Loading...</div>;
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div>
      {/* Category Banner */}
      <div className="relative h-64 bg-gray-900 overflow-hidden">
        <img 
          src={categoryInfo.image} 
          alt={categoryInfo.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{categoryInfo.name}</h1>
            <p className="text-xl">{categoryInfo.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
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

        {/* Category Info */}
        <div className="mb-8">
          <p className="text-gray-600">
            {products.length} product{products.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Filters Section */}
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

  // Get category info
  const categoryInfo = categoriesData[category] || {
    name: category.charAt(0).toUpperCase() + category.slice(1),
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Browse our curated selection of high-quality products.'
  };

  return {
    props: {
      products,
      category,
      categoryInfo
    }
  };
}
