import { useState } from "react";
import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFavorite = (id: string) => {
    console.log("Favorited product:", id);
  };

  const handleViewDetails = (id: string) => {
    console.log("View product details:", id);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={handleSearch}
        cartItemCount={3}
        isAuthenticated={false}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Sustainable Treasures
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find quality pre-owned items and give them a new life
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <Plus className="h-5 w-5 mr-2" />
            Sell Your Item
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <CategoryFilter
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Featured Items
              </h2>
              <p className="text-gray-600">
                {searchQuery && `Results for "${searchQuery}"`}
              </p>
            </div>

            <ProductGrid
              onFavorite={handleFavorite}
              onViewDetails={handleViewDetails}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">
                EcoFinds
              </h3>
              <p className="text-gray-600">
                Making sustainable shopping accessible to everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Browse Categories</li>
                <li>New Arrivals</li>
                <li>Popular Items</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sell</h4>
              <ul className="space-y-2 text-gray-600">
                <li>List an Item</li>
                <li>Seller Guidelines</li>
                <li>Pricing Tips</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Safety Tips</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 EcoFinds. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
