import { Button } from "@/components/ui/button";
import ProductCard from "../../productCard/ProductCard";
import { MoveRight } from "lucide-react";

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
  createdAt: "2025-10-23T08:48:42.407Z",
  updatedAt: "2025-10-23T08:48:42.407Z",
};

export default function Featured() {
  return (
    <section className="w-full my-2">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Featured
        </h2>
        <p className="text-gray-600 -mt-2">
          Below is a list of featured products we have available for you.
        </p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <ProductCard key={product.id} product={product} />
          <ProductCard key={product.id} product={product} />
          <ProductCard key={product.id} product={product} />
          <ProductCard key={product.id} product={product} />
          <ProductCard key={product.id} product={product} />
          <ProductCard key={product.id} product={product} />
          <ProductCard key={product.id} product={product} />
          <ProductCard key={product.id} product={product} />
        </div>
        <div className="text-center mt-5">
          <Button className="rounded-sm">
            Explore More <MoveRight className="-mb-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
