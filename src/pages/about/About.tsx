"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="w-full py-10">
      <div className="max-w-7xl mx-auto space-y-10 px-6">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            About <span className="text-primary">E-Commerce App</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A modern e-commerce platform built using <strong>React</strong> and{" "}
            <strong>Redux Toolkit</strong>, designed to offer a clean, scalable,
            and production-level experience for users and developers.
          </p>
        </section>

        <Separator />

        {/* Overview Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <Card className="shadow-none rounded-sm">
            <CardContent className=" text-muted-foreground leading-relaxed">
              <p>
                This project is a fully functional e-commerce application built
                with a strong focus on performance, reusability, and
                production-ready structure. It demonstrates clean architecture,
                optimized state management using the Redux Toolkit, and smooth
                UI interactions powered by Tailwind CSS and Shadcn components.
              </p>
              <p className="mt-4">
                Users can browse products, filter them based on categories or
                tags, and seamlessly add items to their cart — all managed
                through a lightweight global context.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <Card className="rounded-sm shadow-none">
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Redux Toolkit</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Shadcn UI</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="shadow-none rounded-sm gap-0">
              <CardHeader>
                <CardTitle className="text-lg">Add to Cart</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Manage cart items globally with Redux Toolkit and maintain
                accurate cart states efficiently.
              </CardContent>
            </Card>
            <Card className="shadow-none rounded-sm gap-0">
              <CardHeader>
                <CardTitle className="text-lg">Product Filtering</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Browse and filter products easily based on categories, price, or
                tags for a smooth shopping experience.
              </CardContent>
            </Card>
            <Card className="shadow-none rounded-sm gap-0">
              <CardHeader>
                <CardTitle className="text-lg">Optimized Frontend</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Built with a production-ready structure using reusable
                components and efficient rendering.
              </CardContent>
            </Card>
            <Card className="shadow-none rounded-sm gap-0">
              <CardHeader>
                <CardTitle className="text-lg">Scalable Architecture</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Designed for long-term scalability with maintainable folder
                structures and modular code organization.
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Footer / CTA */}
        <section className="text-center space-y-3">
          <h2 className="text-2xl font-semibold">Future Vision</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The goal is to evolve this project into a complete production-level
            SaaS-ready platform with backend integration, caching, and
            authentication — setting a strong foundation for large-scale
            applications.
          </p>
          <Button className="mt-4">
            <a href="/products">Explore Products</a>
          </Button>
        </section>
      </div>
    </main>
  );
}
