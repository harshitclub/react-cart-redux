import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

export default function Product() {
  // Mock product (in real case, fetch it by id)
  const product = {
    id: "1",
    title: "MacBook Pro M3 (16-inch)",
    description:
      "Apple’s latest 16-inch MacBook Pro with M3 Pro chip, 16GB unified memory, and 1TB SSD storage for professionals.",
    image: "https://ecom-catelogue.vercel.app/product.png",
    category: "Laptops & Computing",
    brand: "Apple",
    price: 2499,
    discountPercentage: 5,
    rating: 4.9,
    stock: 25,
    tags: ["laptop", "apple", "macbook", "m3"],
    createdAt: "2025-10-24T07:22:35.259Z",
    updatedAt: "2025-10-24T07:22:35.259Z",
  };

  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <Card className="shadow-none rounded-sm bg-gray-100 border-none">
          <CardContent className="p-6 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-sm object-contain"
            />
          </CardContent>
        </Card>

        {/* Product Info */}
        <div className="space-y-4">
          <div>
            <Badge
              variant="secondary"
              className="text-sm bg-gray-100 text-gray-700"
            >
              {product.category}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900 mt-3">
              {product.title}
            </h1>
            <p className="text-gray-500 text-sm mt-1">{product.brand}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-gray-800 font-medium text-sm">
              {product.rating}
            </span>
          </div>

          {/* Price Section */}
          <div className="flex items-end gap-2">
            <span className="text-3xl font-semibold text-gray-900">
              ${product.price}
            </span>
            <span className="text-sm font-medium text-green-600">
              In Stock: {product.stock}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            {product.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs text-gray-600 border-gray-300"
              >
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>

            <button className="border border-gray-300 text-gray-800 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
