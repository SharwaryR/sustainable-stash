import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Heart, Shield, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import ProductCard from "@/components/product/ProductCard";

// Sample data for featured products
const featuredProducts = [
  {
    id: "1",
    title: "Vintage Leather Jacket",
    price: 45.99,
    category: "Clothing",
    description: "Genuine leather jacket in excellent condition. Perfect for the eco-conscious fashionista.",
    seller: "EcoWardrobe",
  },
  {
    id: "2", 
    title: "iPhone 12 Pro",
    price: 450.00,
    category: "Electronics",
    description: "Unlocked iPhone 12 Pro in mint condition. Battery health 94%. Includes original charger.",
    seller: "TechSaver",
  },
  {
    id: "3",
    title: "Ceramic Plant Pots Set",
    price: 25.50,
    category: "Home & Garden",
    description: "Set of 3 handmade ceramic pots. Perfect for your indoor garden sanctuary.",
    seller: "GreenThumb",
  },
  {
    id: "4",
    title: "The Great Gatsby - First Edition",
    price: 150.00,
    category: "Books",
    description: "Rare first edition of F. Scott Fitzgerald's masterpiece. A true collector's item.",
    seller: "BookwormTreasures",
  },
];

const features = [
  {
    icon: Recycle,
    title: "Sustainable Living",
    description: "Extend product lifecycles and reduce waste by giving items a second chance.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description: "Connect with like-minded people who care about the environment and conscious consumption.",
  },
  {
    icon: Shield,
    title: "Trusted Marketplace",
    description: "Safe and secure transactions with verified users and quality guarantees.",
  },
  {
    icon: Users,
    title: "Local First",
    description: "Prioritize local sellers to reduce shipping impact and support your community.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover{" "}
            <span className="bg-gradient-to-r from-eco-primary to-eco-primary-light bg-clip-text text-transparent">
              Sustainable
            </span>
            <br />
            Second-Hand Treasures
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the circular economy movement. Buy and sell pre-loved items while making a positive impact on our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-eco hover:opacity-90 text-lg px-8">
              <Link to="/browse">Start Shopping</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/sell">Sell Your Items</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose EcoFinds?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just a marketplace - we're building a sustainable future together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-hover transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-gradient-earth rounded-full">
                      <feature.icon className="w-8 h-8 text-eco-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Finds
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing pre-loved items from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/browse">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-eco text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your sustainable shopping journey today. Every purchase and sale helps create a more circular economy.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/auth">Join EcoFinds</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;