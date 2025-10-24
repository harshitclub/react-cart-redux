"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  return (
    <main className="w-full py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* Left Section: Cart Items */}
        <section className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight m-0">
            Your Cart
          </h1>
          <p className="text-gray-600">
            Below is a list of products you have in your cart.
          </p>
          <Card className="flex items-center justify-center h-64 rounded-sm shadow-none">
            <CardContent className="flex flex-col items-center justify-center text-center">
              <ShoppingCart className="w-12 h-12 text-muted-foreground mb-3" />
              <h2 className="text-lg font-medium mb-1">Your cart is empty</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Looks like you haven’t added anything yet.
              </p>
              <Button variant="default">
                <a href="/products">Continue Shopping</a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Right Section: Cart Summary */}
        <aside className="space-y-4">
          <Card className="rounded-sm shadow-none">
            <CardHeader>
              <CardTitle className="text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Shipping</span>
                <span>—</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>$0.00</span>
              </div>
              <Button disabled className="w-full mt-3">
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
