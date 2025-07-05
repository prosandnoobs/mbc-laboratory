import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Database,
  Gamepad2,
  Map,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Users,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MBC Laboratory</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <a href="#developer" className="text-gray-700 hover:text-blue-600 transition-colors">
                Developer
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Research & Technology Consultancy
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Advanced Technology
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              MBC Laboratory is a leading Research and Technology Consultancy Center specializing in Cybersecurity, Big
              Data Analytics, Game Technology, and Geographic Information Systems (GIS).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Explore Our Services
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About MBC Laboratory</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a premier technology research center dedicated to developing innovative solutions that address
                modern digital challenges. Our multidisciplinary approach combines cutting-edge research with practical
                implementation to deliver exceptional results for our clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-600">Expert Researchers</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To become a leading technology research center that drives innovation and provides world-class
                    solutions in cybersecurity, data analytics, gaming, and GIS.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-lg">Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To deliver innovative, secure, and scalable technology solutions through research excellence,
                    professional consultation, and strategic partnerships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in four key technology domains, providing comprehensive solutions from research and
              development to implementation and consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Advanced security solutions including penetration testing, vulnerability assessment, and security
                  architecture design.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Penetration Testing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Security Auditing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    IDS Implementation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Big Data Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Comprehensive data analytics solutions from data processing to machine learning and business
                  intelligence.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data Processing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Machine Learning
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Intelligence
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Game Technology</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Cutting-edge game development solutions including engine development, AR/VR applications, and
                  interactive media.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Game Development
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    AR/VR Solutions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Interactive Media
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Map className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Geographic Information Systems</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Advanced GIS solutions for spatial analysis, mapping applications, and location-based services.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Spatial Analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mapping Solutions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Location Services
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your project? Contact us today and let&#39;s explore how we can help bring your technology
              vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        Technology Park Building
                        <br />
                        Jl. Innovation Boulevard No. 123
                        <br />
                        Jakarta 12345, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+62 21 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@mbclaboratory.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Map className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map Location</p>
                  <p className="text-sm">Google Maps Integration</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented developers behind this website and learn about their expertise in modern web
              technologies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">MBC Development Team</h3>
                    <p className="text-gray-600 mb-4">Full-Stack Web Developers</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                      <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Expertise</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">TailwindCSS</Badge>
                        <Badge variant="secondary">PHP</Badge>
                        <Badge variant="secondary">MySQL</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Responsive Design Implementation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Modern UI/UX Design
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Contact Form Integration
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Performance Optimization
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold">MBC Laboratory</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Leading Research and Technology Consultancy Center specializing in Cybersecurity, Big Data Analytics,
                Game Technology, and GIS solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Big Data Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Game Technology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    GIS Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Jakarta, Indonesia</li>
                <li>+62 21 1234 5678</li>
                <li>info@mbclaboratory.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MBC Laboratory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
