import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-eco-primary to-eco-primary-light rounded-full">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-eco-primary to-eco-primary-light bg-clip-text text-transparent">
              EcoFinds
            </span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search sustainable finds..." 
                className="pl-10 bg-muted/50 border-0 focus:bg-background transition-colors"
              />
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/browse" 
              className={`text-sm font-medium transition-colors hover:text-eco-primary ${
                location.pathname === '/browse' ? 'text-eco-primary' : 'text-muted-foreground'
              }`}
            >
              Browse
            </Link>
            <Link 
              to="/sell" 
              className={`text-sm font-medium transition-colors hover:text-eco-primary ${
                location.pathname === '/sell' ? 'text-eco-primary' : 'text-muted-foreground'
              }`}
            >
              Sell
            </Link>
            <Link 
              to="/my-listings" 
              className={`text-sm font-medium transition-colors hover:text-eco-primary ${
                location.pathname === '/my-listings' ? 'text-eco-primary' : 'text-muted-foreground'
              }`}
            >
              My Listings
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard">
                <User className="w-5 h-5" />
              </Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search sustainable finds..." 
              className="pl-10 bg-muted/50 border-0"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/browse" 
                className="text-sm font-medium text-muted-foreground hover:text-eco-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse
              </Link>
              <Link 
                to="/sell" 
                className="text-sm font-medium text-muted-foreground hover:text-eco-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell
              </Link>
              <Link 
                to="/my-listings" 
                className="text-sm font-medium text-muted-foreground hover:text-eco-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Listings
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;