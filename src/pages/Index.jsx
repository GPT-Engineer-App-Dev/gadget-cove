import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    { id: 1, name: "Smartphone X", price: 799, image: "/placeholder.svg" },
    { id: 2, name: "Laptop Pro", price: 1299, image: "/placeholder.svg" },
    { id: 3, name: "Wireless Earbuds", price: 149, image: "/placeholder.svg" },
  ];

  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

const HeroSection = () => (
  <section className="py-12 md:py-24">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to TechGadgets</h1>
      <p className="text-xl md:text-2xl mb-8">Discover the latest in electronic innovations</p>
      <Button size="lg">Shop Now</Button>
    </div>
  </section>
);

const FeaturedProducts = ({ products }) => (
  <section className="py-12">
    <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          </CardHeader>
          <CardContent>
            <CardTitle>{product.name}</CardTitle>
            <p className="text-2xl font-bold">${product.price}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-12 bg-muted">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              </p>
              <p className="font-semibold">- Happy Customer {i}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Stay updated with our latest products and offers</p>
      <div className="flex justify-center">
        <Input className="w-full max-w-sm mr-2" placeholder="Enter your email" type="email" />
        <Button>Subscribe</Button>
      </div>
    </div>
  </section>
);

export default Index;