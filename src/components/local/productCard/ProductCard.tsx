import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  stock: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const inStock = product.stock > 0;

  return (
    <Card className="group w-full max-w-xs rounded-sm shadow-none border border-gray-200 bg-white overflow-hidden hover:border-gray-300 transition-colors p-0">
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <Badge
          variant="secondary"
          className="absolute top-2 right-2 text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700"
        >
          {product.category}
        </Badge>
      </div>

      {/* Content Section */}
      <CardContent className="px-4 space-y-2">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(product.rating)
                  ? "fill-yellow-400 stroke-yellow-400"
                  : "stroke-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-500 text-sm font-medium ml-1">
            ({product.rating})
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-snug line-clamp-2">
          {product.description}
        </p>

        {/* Price & Stock */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-semibold text-gray-900">
            ${product.price}
          </span>
          <Badge
            variant="outline"
            className={`text-xs px-2 py-0.5 ${
              inStock
                ? "text-green-600 border-green-300 bg-green-50"
                : "text-red-600 border-red-300 bg-red-50"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="px-4 pb-4 pt-1">
        <Button
          size="sm"
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
