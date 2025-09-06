import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  condition: string;
  location: string;
  timePosted: string;
  seller: {
    name: string;
    avatar?: string;
    rating?: number;
  };
  isFavorited?: boolean;
}

interface ProductGridProps {
  products?: Product[];
  onFavorite?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    title: "Vintage Leather Jacket - Genuine Cowhide",
    price: 45,
    originalPrice: 120,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
    category: "Clothing",
    condition: "Like New",
    location: "San Francisco, CA",
    timePosted: "2 hours ago",
    seller: {
      name: "Sarah M.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 4.8,
    },
    isFavorited: false,
  },
  {
    id: "2",
    title: "MacBook Pro 13-inch 2019 - Excellent Condition",
    price: 850,
    originalPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
    category: "Electronics",
    condition: "Excellent",
    location: "New York, NY",
    timePosted: "4 hours ago",
    seller: {
      name: "Mike R.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
      rating: 4.9,
    },
    isFavorited: true,
  },
  {
    id: "3",
    title: "Handcrafted Wooden Coffee Table",
    price: 180,
    originalPrice: 350,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    category: "Furniture",
    condition: "Good",
    location: "Austin, TX",
    timePosted: "1 day ago",
    seller: {
      name: "Emma L.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 4.7,
    },
    isFavorited: false,
  },
  {
    id: "4",
    title: "Canon EOS R5 Camera Body",
    price: 2200,
    originalPrice: 3899,
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&q=80",
    category: "Electronics",
    condition: "Like New",
    location: "Los Angeles, CA",
    timePosted: "3 hours ago",
    seller: {
      name: "David K.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      rating: 5.0,
    },
    isFavorited: false,
  },
  {
    id: "5",
    title: "Vintage Vinyl Record Collection (50+ Albums)",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
    category: "Music",
    condition: "Good",
    location: "Chicago, IL",
    timePosted: "6 hours ago",
    seller: {
      name: "Alex P.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      rating: 4.6,
    },
    isFavorited: false,
  },
  {
    id: "6",
    title: "Designer Handbag - Authentic Louis Vuitton",
    price: 650,
    originalPrice: 1200,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80",
    category: "Fashion",
    condition: "Excellent",
    location: "Miami, FL",
    timePosted: "5 hours ago",
    seller: {
      name: "Jessica T.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
      rating: 4.9,
    },
    isFavorited: true,
  },
];

export default function ProductGrid({
  products = defaultProducts,
  onFavorite = () => {},
  onViewDetails = () => {},
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No products found matching your criteria.
        </p>
        <p className="text-gray-400 mt-2">
          Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onFavorite={onFavorite}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
