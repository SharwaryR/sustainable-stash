import { Button } from "@/components/ui/button";
import { Shirt, Smartphone, Home, Book, Car, Gamepad2, Baby, Dumbbell } from "lucide-react";

const categories = [
  { id: "all", name: "All Items", icon: null },
  { id: "clothing", name: "Clothing", icon: Shirt },
  { id: "electronics", name: "Electronics", icon: Smartphone },
  { id: "home", name: "Home & Garden", icon: Home },
  { id: "books", name: "Books", icon: Book },
  { id: "automotive", name: "Automotive", icon: Car },
  { id: "gaming", name: "Gaming", icon: Gamepad2 },
  { id: "baby", name: "Baby & Kids", icon: Baby },
  { id: "sports", name: "Sports", icon: Dumbbell },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className={`justify-start h-auto py-3 px-4 ${
                selectedCategory === category.id 
                  ? "bg-gradient-eco text-white hover:opacity-90" 
                  : "hover:bg-muted"
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <div className="flex items-center space-x-3">
                {Icon && <Icon className="w-5 h-5" />}
                <span className="text-left">{category.name}</span>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;