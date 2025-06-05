import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Wind, Recycle, Lightbulb, ArrowRight, Leaf, Globe, Zap } from "lucide-react"
import Image from "next/image"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  const topics = [
    {
      title: "Solar Energy",
      description: "Harness the power of the sun with photovoltaic technology",
      icon: Sun,
      href: "/solar-energy",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50 hover:bg-yellow-100",
    },
    {
      title: "Wind Energy",
      description: "Convert wind power into clean electricity",
      icon: Wind,
      href: "/wind-energy",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50 hover:bg-blue-100",
    },
    {
      title: "Recycling",
      description: "Transform waste into valuable resources",
      icon: Recycle,
      href: "/recycling",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50 hover:bg-green-100",
    },
    {
      title: "Energy Efficiency",
      description: "Optimize energy consumption for a sustainable future",
      icon: Lightbulb,
      href: "/energy-efficiency",
      color: "from-amber-400 to-yellow-500",
      bgColor: "bg-amber-50 hover:bg-amber-100",
    },
  ]

  const stats = [
    { icon: Globe, value: "50+", label: "Countries Covered" },
    { icon: Leaf, value: "1M+", label: "Trees Saved" },
    { icon: Zap, value: "75%", label: "Energy Reduction" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Learn About
                  <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Sustainability
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Explore the principles of sustainability and non-conventional energy sources. Join millions learning
                  to create a greener future.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  Take Quiz
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
              <Image
                src="/team_b14_logo.jpg"
                alt="thinkGreen logo"
                width={600}
                height={400}
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Explore Topics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deep into various aspects of sustainability and renewable energy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic, index) => (
              <Link key={index} href={topic.href}>
                <Card
                  className={`group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${topic.bgColor} overflow-hidden animate-slide-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${topic.color} rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <topic.icon className="h-10 w-10 text-white" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                    </div>

                    <div className="flex items-center justify-center text-gray-500 group-hover:text-gray-700 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of learners who are already making an impact on our planet's future
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
