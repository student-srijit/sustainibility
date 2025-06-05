"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Environmental Engineer",
      company: "GreenTech Solutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "This platform transformed how I understand renewable energy. The interactive tools and comprehensive content made complex concepts accessible. I've implemented several strategies from here in my professional work.",
      highlight: "Transformed my understanding",
    },
    {
      name: "Michael Chen",
      role: "Sustainability Manager",
      company: "EcoCorperation Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The carbon footprint calculator helped our company reduce emissions by 30%. The educational content is top-notch and the tools are incredibly practical for real-world applications.",
      highlight: "Reduced emissions by 30%",
    },
    {
      name: "Emily Rodriguez",
      role: "High School Teacher",
      company: "Lincoln High School",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I use this platform to teach my students about sustainability. The engaging animations and clear explanations make learning fun. My students are now passionate about environmental conservation.",
      highlight: "Students love learning here",
    },
    {
      name: "David Thompson",
      role: "Homeowner",
      company: "Solar Enthusiast",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The solar calculator was spot-on! I saved $2,400 in my first year after installing panels based on the recommendations. The payback period was exactly as predicted.",
      highlight: "Saved $2,400 in first year",
    },
    {
      name: "Dr. Lisa Park",
      role: "Climate Researcher",
      company: "University of California",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As a climate researcher, I appreciate the scientific accuracy and up-to-date information. This is the best educational resource for sustainability I've encountered.",
      highlight: "Scientifically accurate",
    },
    {
      name: "James Wilson",
      role: "Business Owner",
      company: "Wilson Manufacturing",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Implementing energy efficiency measures from this platform reduced our operational costs by 25%. The ROI was incredible and our employees are proud to work for a green company.",
      highlight: "25% cost reduction",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-green-400 rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Community Says
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners who are making a real impact on sustainability
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 animate-pulse-slow">
                    <div className="w-full h-full rounded-full bg-white p-1">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2 animate-bounce-slow">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left space-y-4">
                  <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current animate-twinkle"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="space-y-2">
                    <div className="font-bold text-xl text-gray-900">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                    <div className="text-sm text-blue-600 font-semibold">{testimonials[currentIndex].company}</div>
                    <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                      {testimonials[currentIndex].highlight}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="rounded-full p-3 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="rounded-full p-3 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                index === currentIndex ? "ring-2 ring-blue-500 bg-blue-50" : "bg-white/80"
              } backdrop-blur-sm animate-slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => goToSlide(index)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-0.5">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover bg-white p-0.5"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>

                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 line-clamp-3">"{testimonial.text}"</p>

                <div className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-full inline-block">
                  {testimonial.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
