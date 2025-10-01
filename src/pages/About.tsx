import { Target, Eye, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const clients = [
    {
      icon: Users,
      title: "Individual Landlords",
      description: "Owners of single flats, houses, or multiple buy-to-let properties",
    },
    {
      icon: Target,
      title: "Businesses & Corporations",
      description: "Companies managing office buildings, retail spaces, or mixed-use developments",
    },
    {
      icon: Eye,
      title: "Investors",
      description: "Domestic and international investors seeking professional oversight of their property portfolios",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center" data-aos="fade-down">About Us</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Professional property management solutions for London and beyond
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Petz International Limited is a London-based property management firm providing professional solutions to both residential landlords and commercial property owners. With years of expertise in the UK property market, we combine local knowledge, innovative systems, and a customer-first approach to ensure every property we manage performs at its best.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as one of the most trusted and client-focused property management companies in the UK, delivering value-driven services that help property owners and businesses achieve sustainable success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To safeguard property investments through effective management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To deliver transparent, professional, and reliable services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To provide peace of mind by handling all aspects of property care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To act as a trusted partner for individuals and businesses alike</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <client.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{client.title}</h3>
                  <p className="text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
