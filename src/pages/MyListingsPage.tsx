import { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import { Link } from "react-router-dom";

// Sample user listings
const sampleListings = [
  {
    id: "1",
    title: "Vintage Leather Jacket",
    price: 45.99,
    category: "Clothing",
    status: "active",
    views: 24,
    likes: 5,
    description: "Genuine leather jacket in excellent condition.",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "iPhone 12 Pro",
    price: 450.00,
    category: "Electronics", 
    status: "sold",
    views: 156,
    likes: 23,
    description: "Unlocked iPhone 12 Pro in mint condition.",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    title: "Ceramic Plant Pots Set",
    price: 25.50,
    category: "Home & Garden",
    status: "active",
    views: 45,
    likes: 12,
    description: "Set of 3 handmade ceramic pots.",
    createdAt: "2024-01-20",
  },
];

const MyListingsPage = () => {
  const [listings, setListings] = useState(sampleListings);
  const { toast } = useToast();

  const handleDelete = (id: string, title: string) => {
    setListings(prev => prev.filter(listing => listing.id !== id));
    toast({
      title: "Listing Deleted",
      description: `"${title}" has been removed from your listings.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-eco-success text-white";
      case "sold":
        return "bg-eco-warning text-white";
      case "draft":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My Listings
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage your products and track their performance
            </p>
          </div>
          <Button asChild className="bg-gradient-eco hover:opacity-90">
            <Link to="/sell">
              <Plus className="w-4 h-4 mr-2" />
              Add New Listing
            </Link>
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-eco-primary">{listings.length}</h3>
              <p className="text-muted-foreground">Total Listings</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-eco-success">
                {listings.filter(l => l.status === "active").length}
              </h3>
              <p className="text-muted-foreground">Active Listings</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-eco-warning">
                {listings.filter(l => l.status === "sold").length}
              </h3>
              <p className="text-muted-foreground">Sold Items</p>
            </CardContent>
          </Card>
        </div>

        {/* Listings Grid */}
        {listings.length === 0 ? (
          <Card className="p-12 text-center">
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">No listings yet</h3>
              <p className="text-muted-foreground mb-6">
                Start selling your items to build a sustainable marketplace
              </p>
              <Button asChild className="bg-gradient-eco hover:opacity-90">
                <Link to="/sell">Create Your First Listing</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Card key={listing.id} className="hover:shadow-hover transition-shadow">
                <div className="relative aspect-square overflow-hidden bg-gradient-earth rounded-t-lg">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-eco-primary opacity-50">
                      {listing.title.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <Badge 
                    className={`absolute top-3 left-3 ${getStatusColor(listing.status)}`}
                  >
                    {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                  </Badge>
                </div>
                
                <CardContent className="p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1">
                      {listing.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {listing.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-eco-primary">
                        ${listing.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {listing.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{listing.views} views</p>
                      <p className="text-xs text-muted-foreground">{listing.likes} likes</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDelete(listing.id, listing.title)}
                      className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListingsPage;