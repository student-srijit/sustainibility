import Link from "next/link"
import { Leaf, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Topics",
      links: [
        { name: "Solar Energy", href: "/solar-energy" },
        { name: "Wind Energy", href: "/wind-energy" },
        { name: "Recycling", href: "/recycling" },
        { name: "Energy Efficiency", href: "/energy-efficiency" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Quiz", href: "/quiz" },
        { name: "Tools", href: "/tools" },
        { name: "Blog", href: "/blog" },
        { name: "Research", href: "/research" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Learn for Sustainability</span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Empowering individuals and communities to create a sustainable future through education and action.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Learn for Sustainability. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
