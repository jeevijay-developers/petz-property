import { Home, Building2, FileText, DollarSign, TrendingUp, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const residentialServices = [
    "Tenant sourcing, screening, and referencing",
    "Lease and rent agreement management",
    "Rent collection & arrears follow-up",
    "Regular property inspections & reports",
    "Maintenance & repair coordination",
    "Compliance checks (Gas Safety, Electrical Safety, EPC, etc.)",
    "End of tenancy services & deposit handling",
  ];

  const commercialServices = [
    "Lease negotiation & renewals",
    "Service charge administration",
    "Facilities management & repairs",
    "Occupier relations & communication",
    "Health & safety compliance audits",
    "Regular asset performance reviews",
    "Retail, office, and industrial property oversight",
  ];

  const additionalServices = [
    {
      icon: TrendingUp,
      title: "Asset & Portfolio Management",
      description: "Strategic advice to improve property returns",
    },
    {
      icon: DollarSign,
      title: "Investor Support",
      description: "Guidance for international investors entering the UK market",
    },
    {
      icon: Scale,
      title: "Tenant Relations & Dispute Resolution",
      description: "Professional communication and resolution handling",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center" data-aos="fade-down">Our Services</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive property management solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto" data-aos="fade-up">
            We offer a comprehensive suite of property management services designed to cover every aspect of property ownership. Our services are available on a contract basis or pay-as-you-go fee basis, depending on your needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-none shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Residential Property Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {residentialServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5 text-sm">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Commercial Property Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {commercialServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5 text-sm">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Management Models */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-md" data-aos="fade-up" data-aos-delay="300">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Contract-Based Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For property owners seeking long-term, all-inclusive management, our contract model covers all aspects of property management for a fixed annual/long-term fee.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-md" data-aos="fade-up" data-aos-delay="400">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Fee-Based Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For those who prefer flexibility, we offer fee-based services. Pay only for the services you require, such as tenant sourcing, inspections, or compliance checks—no ongoing commitments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="pt-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Card className="inline-block border-none shadow-md" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Legal & Compliance Advisory</h3>
                <p className="text-muted-foreground">
                  Keeping your property aligned with ever-changing UK regulations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
