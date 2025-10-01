import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      content: ["3601 Apartment, Landmark Pinnacle", "10 Marsh Wall", "London, E14 9FY", "United Kingdom"],
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["[Add Phone Number]"],
    },
    {
      icon: Mail,
      title: "Email",
      content: ["[Add Email Address]"],
    },
    {
      icon: Globe,
      title: "Website",
      content: ["www.[yourdomain].co.uk"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you own a single property, manage a portfolio, or run a business with real estate assets, our team is here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contactDetails.map((detail, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
                      {detail.content.map((line, i) => (
                        <p key={i} className="text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Info Card */}
          <div className="max-w-5xl mx-auto mt-16">
            <Card className="border-none shadow-xl bg-secondary/30">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-center mb-6">
                  Petz International Limited
                </h2>
                <div className="text-center space-y-2 text-muted-foreground">
                  <p className="text-lg">UK-Based Property Management Company</p>
                  <p className="text-lg">Serving London and Beyond</p>
                  <p className="text-lg font-semibold text-primary mt-4">
                    Your Strategic Partner in Property Management
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground">
                    Located in the Heart of London
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Landmark Pinnacle, Canary Wharf
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
