import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/why-choose-us", label: "Why Choose Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Petz International</span>
                <span className="text-xs text-white/70">Property Management</span>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Professional property management services in London, delivering peace of mind and maximizing value.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="text-white/70 text-sm space-y-2">
              <p>3601 Apartment, Landmark Pinnacle</p>
              <p>10 Marsh Wall</p>
              <p>London, E14 9FY</p>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Petz International Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
