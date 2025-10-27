import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/tynio-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Tynio Ltd" className="h-12 w-12" />
              <div>
                <div className="text-xl font-bold">TYNIO LTD</div>
                <div className="text-sm opacity-80">Diversifying World with Engineers</div>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-md">
              Leading provider of AI-integrated solutions, transforming businesses through innovative
              technology and expert engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@tynioltd.com"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <Mail size={16} />
                  info@tynioltd.com
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/8801873722228?text=${encodeURIComponent(
                    "Hello, I'm interested in Tynio's AI-integrated solutions. Can we discuss my project?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  +880 1873-722228
                </a>
              </li>
              <li className="text-sm opacity-80 mt-4">
                <p className="font-semibold mb-1">Registered Office:</p>
                <p>124-128 City Road</p>
                <p>London, United Kingdom</p>
                <p>EC1V 2NX</p>
                <p className="mt-2 text-xs opacity-70">Private Limited Company</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {currentYear} Tynio Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
