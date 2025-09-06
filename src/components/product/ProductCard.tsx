import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  category: string;
  image?: string;
  description: string;
  seller: string;
}

const ProductCard = ({ id, title, price, category, image, description, seller }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-earth">
            <span className="text-2xl font-bold text-eco-primary opacity-50">
              {title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        {/* Category Badge */}
        <Badge 
          className="absolute top-3 left-3 bg-white/90 text-eco-primary hover:bg-white"
          variant="secondary"
        >
          {category}
        </Badge>
        
        {/* Favorite Button */}
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-3 right-3 bg-white/90 hover:bg-white"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-eco-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-eco-primary">
                ${price.toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground">
                by {seller}
              </p>
            </div>
            
            <Button 
              size="sm" 
              className="bg-gradient-eco hover:opacity-90 transition-opacity"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;