import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request received! We'll contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2"
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-wide text-center">
            BOOK A TABLE
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Reserve your spot at The White Hart
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
            <div>
              <Label htmlFor="name">Name*</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone*</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date">Date*</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="time">Time*</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="guests">Number of Guests*</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Submit Reservation
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reservations;
