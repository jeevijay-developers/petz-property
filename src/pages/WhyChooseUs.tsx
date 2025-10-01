import { MapPin, Package, Monitor, DollarSign, Briefcase, Heart, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: MapPin,
      title: "UK-Based Experts",
      description: "Local London presence with deep knowledge of UK property laws and regulations",
    },
    {
      icon: Package,
      title: "Tailored Solutions",
      description: "Custom packages designed to fit every client's unique needs and requirements",
    },
    {
      icon: Monitor,
      title: "Technology-Driven",
      description: "Modern systems for tenant management, rent collection, and detailed reporting",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, clear breakdowns of all costs and services provided",
    },
    {
      icon: Briefcase,
      title: "Full Service Management",
      description: "From tenant onboarding to asset growth strategies - we handle it all",
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "We handle all the details so you can focus on what matters most",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center" data-aos="fade-down">Why Choose Us</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Trust, transparency, and results - the pillars of our service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
            <p className="text-xl text-muted-foreground leading-relaxed">
              When you choose Petz International Limited, you choose trust, transparency, and results. Our clients see us not just as a property manager, but as a strategic partner in their property journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-none shadow-xl bg-gradient-to-br from-primary to-accent text-white" data-aos="zoom-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience Professional Property Management?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join the growing number of satisfied clients who trust us with their property investments
              </p>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
