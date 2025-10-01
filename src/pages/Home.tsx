import { CheckCircle2, Shield, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-property.jpg";

const Home = () => {
  const benefits = [
    "Reliable property management tailored to your needs",
    "Transparent contract or fee-based options",
    "Expertise in UK property laws and regulations",
    "End-to-end services designed to save time and reduce risk",
  ];

  const features = [
    {
      icon: Shield,
      title: "Professional Management",
      description: "Expert handling of all property aspects with complete transparency",
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Focus on your future while we handle the day-to-day details",
    },
    {
      icon: TrendingUp,
      title: "Maximize Value",
      description: "Strategic approach to increase your property's return on investment",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="London Property Management" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-aos="fade-up">
            Your Partner in Property Care<br />and Asset Growth
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/95" data-aos="fade-up" data-aos-delay="100">
            Professional property management services in London, delivering peace of mind and maximizing value for landlords and investors
          </p>
          <div className="flex gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Our Services
              </Button>
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Welcome to Petz International Limited
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Petz International Limited, we understand that property is not just a financial investment—it's also a long-term commitment that requires careful management. As a UK-based property management company headquartered in London, we specialize in managing residential and commercial properties with professionalism, transparency, and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-secondary/50 border-none" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Clients Choose Us</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let us take care of your property
          </h2>
          <p className="text-xl mb-8 text-white/90">
            While you focus on your future
          </p>
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
