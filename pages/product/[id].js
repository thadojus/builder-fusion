import { useRouter } from 'next/router';
import ProductDetail from '../../components/ProductDetail';
import ProductList from '../../components/ProductList';
import productsData from '../../data/products.json';

export default function ProductPage({ product, relatedProducts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li>
              <a 
                href={`/category/${product.category}`} 
                className="text-gray-500 hover:text-gray-700 capitalize"
              >
                {product.category}
              </a>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Product Detail */}
      <ProductDetail product={product} />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <ProductList products={relatedProducts} />
        </div>
      )}

      {/* Product Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Why Choose This Product?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h4 className="font-medium text-gray-900">Quality Guaranteed</h4>
                <p className="text-gray-600 text-sm">High-quality materials and craftsmanship</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <div>
                <h4 className="font-medium text-gray-900">Fast Shipping</h4>
                <p className="text-gray-600 text-sm">Free shipping on orders over ₹4000</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <div>
                <h4 className="font-medium text-gray-900">Customer Loved</h4>
                <p className="text-gray-600 text-sm">Highly rated by our customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // Generate paths for all products
  const paths = productsData.map((product) => ({
    params: { id: product.id }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  
  // Find the product by ID
  const product = productsData.find(product => product.id === id);

  if (!product) {
    return {
      notFound: true
    };
  }

  // Find related products (same category, excluding current product)
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return {
    props: {
      product,
      relatedProducts
    }
  };
}
