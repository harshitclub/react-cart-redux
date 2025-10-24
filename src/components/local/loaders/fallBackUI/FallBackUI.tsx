import { Loader, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FallBackUI() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[280px] sm:w-[320px] shadow-none border-none border-gray-200 rounded-sm">
        <CardContent className="flex flex-col items-center justify-center py-10">
          <div className="flex items-center gap-2 mb-3">
            <ShoppingCart className="w-7 h-7 text-primary" />
            <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
              ECOM
            </h1>
          </div>
          <Loader className="w-6 h-6 text-primary animate-spin" />
          <p className="mt-3 text-sm text-gray-600">
            Loading your experience...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
