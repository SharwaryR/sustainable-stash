import { useState } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Header from "@/components/layout/Header";
import ProductCard from "@/components/product/ProductCard";
import CategoryFilter from "@/components/product/CategoryFilter";

// Sample products data
const sampleProducts = [
  {
    id: "1",
    title: "Vintage Leather Jacket",
    price: 45.99,
    category: "clothing",
    description: "Genuine leather jacket in excellent condition. Perfect for the eco-conscious fashionista.",
    seller: "EcoWardrobe",
  },
  {
    id: "2", 
    title: "iPhone 12 Pro",
    price: 450.00,
    category: "electronics",
    description: "Unlocked iPhone 12 Pro in mint condition. Battery health 94%. Includes original charger.",
    seller: "TechSaver",
  },
  {
    id: "3",
    title: "Ceramic Plant Pots Set",
    price: 25.50,
    category: "home",
    description: "Set of 3 handmade ceramic pots. Perfect for your indoor garden sanctuary.",
    seller: "GreenThumb",
  },
  {
    id: "4",
    title: "The Great Gatsby - First Edition",
    price: 150.00,
    category: "books",
    description: "Rare first edition of F. Scott Fitzgerald's masterpiece. A true collector's item.",
    seller: "BookwormTreasures",
  },
  {
    id: "5",
    title: "Wireless Gaming Headset",
    price: 85.00,
    category: "gaming",
    description: "High-quality wireless gaming headset with noise cancellation. Like new condition.",
    seller: "GameGear",
  },
  {
    id: "6",
    title: "Organic Cotton T-Shirt",
    price: 15.99,
    category: "clothing",
    description: "Soft organic cotton t-shirt, barely worn. Sustainable fashion at its best.",
    seller: "EcoThreads",
  },
  {
    id: "7",
    title: "Bamboo Coffee Table",
    price: 120.00,
    category: "home",
    description: "Beautiful bamboo coffee table, perfect for sustainable living spaces.",
    seller: "FurnitureFinds",
  },
  {
    id: "8",
    title: "Running Shoes - Size 9",
    price: 35.00,
    category: "sports",
    description: "Lightly used running shoes in excellent condition. Great for outdoor activities.",
    seller: "SportSwap",
  },
];

const BrowsePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Browse Sustainable Finds
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover amazing pre-loved items from our community
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Mobile Filter Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 space-y-6">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found matching your criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;