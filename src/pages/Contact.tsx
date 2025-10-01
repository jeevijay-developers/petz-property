import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      content: ["07404384022"],
    },
    {
      icon: Mail,
      title: "Email",
      content: ["Preitybobby@yahoo.com"],
    },
    {
      icon: Globe,
      title: "Website",
      content: ["www.petzcompany.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      content: ["3601 Apartment, Landmark Pinnacle, 10 Marsh Wall, London, E14 9FY, United Kingdom"],
    }
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
        </div>
      </section>

      {/* Map Section with Background */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-96">
                {/* Map as background */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.573313960264!2d-0.027857524306498276!3d51.50269711104808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760363b2d93365%3A0x8e7a8527185f0db0!2s3601%2C%2010%20Marsh%20Wall%2C%20London%20E14%209XZ%2C%20UK!5e0!3m2!1sen!2sin!4v1759311170797!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
