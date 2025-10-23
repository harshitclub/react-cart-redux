import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/local/productCard/ProductCard";

export default function Products() {
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

  return (
    <>
      <main className="w-full my-2">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            All Products
          </h2>
          <p className="text-gray-600 -mt-2">
            Below is a list of all products we have available for you.
          </p>

          {/* FILTER UI */}
          <div className="filter mt-6 p-4 border border-gray-200 rounded-sm bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between flex-wrap">
              {/* Search */}
              <div className="flex-1 min-w-[220px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search Products
                </label>
                <Input
                  type="text"
                  placeholder="Search by name, brand, etc."
                  className="w-full rounded-sm"
                />
              </div>

              {/* 🏷️ Category */}
              <div className="flex-1 min-w-[180px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <Select>
                  <SelectTrigger className="w-full rounded-sm">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="mobiles">Mobiles</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="flex-1 min-w-[220px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <div className="px-1">
                  <Slider
                    defaultValue={[1000]}
                    max={5000}
                    step={100}
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500 mt-1">$0 — $5000</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex-1 min-w-[180px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Rating
                </label>
                <Select>
                  <SelectTrigger className="w-full rounded-sm">
                    <SelectValue placeholder="Select rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="4">4 ★ & above</SelectItem>
                    <SelectItem value="3">3 ★ & above</SelectItem>
                    <SelectItem value="2">2 ★ & above</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Reset Button */}
              <div className="shrink-0 mt-1 sm:mt-0">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-sm"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* 🛍️ Product Grid */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array(8)
              .fill(product)
              .map((p, i) => (
                <ProductCard key={i} product={p} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
