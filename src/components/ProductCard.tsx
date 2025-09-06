import { Heart, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProductCardProps {
  id?: string;
  title?: string;
  price?: number;
  originalPrice?: number;
  image?: string;
  category?: string;
  condition?: string;
  location?: string;
  timePosted?: string;
  seller?: {
    name: string;
    avatar?: string;
    rating?: number;
  };
  isFavorited?: boolean;
  onFavorite?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

export default function ProductCard({
  id = "1",
  title = "Vintage Leather Jacket",
  price = 45,
  originalPrice = 120,
  image = "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
  category = "Clothing",
  condition = "Like New",
  location = "San Francisco, CA",
  timePosted = "2 hours ago",
  seller = {
    name: "Sarah M.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    rating: 4.8,
  },
  isFavorited = false,
  onFavorite = () => {},
  onViewDetails = () => {},
}: ProductCardProps) {
  const savings = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card
      className="group hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={() => onViewDetails(id)}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white ${
            isFavorited ? "text-red-500" : "text-gray-600"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(id);
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
        </Button>
        <Badge className="absolute top-2 left-2" variant="secondary">
          {condition}
        </Badge>
        {savings > 0 && (
          <Badge className="absolute bottom-2 left-2 bg-green-600">
            {savings}% off
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
          {title}
        </h3>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-2xl font-bold text-green-600">${price}</span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Clock className="h-4 w-4 mr-1" />
          {timePosted}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={seller.avatar} />
              <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{seller.name}</span>
            {seller.rating && (
              <span className="text-sm text-yellow-600">★ {seller.rating}</span>
            )}
          </div>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(id);
            }}
          >
            View
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
