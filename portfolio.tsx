"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe, Download, Send } from "lucide-react"
import Image from "next/image"
import { AnimatedBackground } from "./components/animated-background"
import { TypingAnimation } from "./components/typing-animation"
import { AdvancedNavbar } from "./components/advanced-navbar"
import { EnhancedFloatingElements } from "./components/enhanced-floating-elements"
import { useSectionObserver } from "./components/section-observer"
import { useEffect, useState } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const activeSection = useSectionObserver()

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      color: "blue",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend Development",
      icon: Database,
      color: "green",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      color: "purple",
      items: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      category: "Tools & Others",
      icon: Globe,
      color: "orange",
      items: ["Git", "Docker", "AWS", "Vercel"],
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Platform e-commerce lengkap dengan sistem pembayaran, manajemen inventory, dan dashboard admin yang powerful.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Task Management App",
      description:
        "Aplikasi manajemen tugas dengan fitur kolaborasi real-time, notifikasi push, dan analytics mendalam.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
      gradient: "from-green-500 to-blue-600",
    },
    {
      title: "AI Weather Dashboard",
      description:
        "Dashboard cuaca dengan AI prediction, visualisasi data interaktif, dan alert system untuk cuaca ekstrem.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "D3.js", "Python", "TensorFlow"],
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-32 w-32 border border-purple-300 opacity-30"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-all duration-1000">
      <AnimatedBackground />
      <EnhancedFloatingElements />
      <AdvancedNavbar activeSection={activeSection} />

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse" />
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Profile Picture"
                width={200}
                height={200}
                className="relative rounded-full border-4 border-white/50 dark:border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              John Doe
            </h1>

            <div className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8 h-16">
              <TypingAnimation
                texts={["Full Stack Developer 🚀", "UI/UX Designer 🎨", "Problem Solver 💡", "Tech Enthusiast ⚡"]}
                className="font-semibold"
                speed={80}
                deleteSpeed={40}
                pauseTime={2000}
              />
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed transform transition-all duration-1000 delay-300">
                Saya adalah seorang developer yang passionate dalam menciptakan pengalaman digital yang luar biasa.
                Dengan pengalaman lebih dari 5 tahun, saya mengkhususkan diri dalam teknologi modern dan selalu
                berinovasi untuk memberikan solusi terbaik.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Github, label: "GitHub", href: "#", color: "hover:bg-gray-600" },
                { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-600" },
                { icon: Mail, label: "Email", href: "#", color: "hover:bg-red-500" },
                { icon: Download, label: "CV", href: "#", color: "hover:bg-green-600" },
              ].map((social, index) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="lg"
                  className={`group bg-white/50 dark:bg-white/10 border-gray-300/50 dark:border-white/20 hover:text-white hover:border-transparent transform hover:scale-110 transition-all duration-500 ${
                    social.color
                  } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <social.icon className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  {social.label}
                </Button>
              ))}
            </div>

            <div className="animate-bounce mt-16">
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto">
                <div className="w-1 h-3 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mx-auto mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Keahlian Saya
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={skill.category}
                className={`group bg-white/80 dark:bg-white/10 border-gray-200/50 dark:border-white/20 backdrop-blur-xl hover:bg-white/90 dark:hover:bg-white/15 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="relative inline-block mb-4">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        skill.color === "blue"
                          ? "from-blue-400 to-blue-600"
                          : skill.color === "green"
                            ? "from-green-400 to-green-600"
                            : skill.color === "purple"
                              ? "from-purple-400 to-purple-600"
                              : "from-orange-400 to-orange-600"
                      } rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    />
                    <skill.icon
                      className={`relative h-12 w-12 mx-auto ${
                        skill.color === "blue"
                          ? "text-blue-500"
                          : skill.color === "green"
                            ? "text-green-500"
                            : skill.color === "purple"
                              ? "text-purple-500"
                              : "text-orange-500"
                      } group-hover:animate-pulse transition-all duration-300`}
                    />
                  </div>
                  <CardTitle className="text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className={`${
                          skill.color === "blue"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                            : skill.color === "green"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                              : skill.color === "purple"
                                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                        } hover:scale-110 transition-transform duration-200`}
                        style={{ animationDelay: `${itemIndex * 100}ms` }}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Proyek Unggulan
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group bg-white/80 dark:bg-white/10 border-gray-200/50 dark:border-white/20 backdrop-blur-xl overflow-hidden hover:bg-white/90 dark:hover:bg-white/15 transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/25 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-purple-300 text-purple-600 dark:border-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:scale-110 transition-all duration-200"
                        style={{ animationDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Mari Berkolaborasi
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Hubungi Saya</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari
                visi Anda. Mari kita ciptakan sesuatu yang luar biasa bersama!
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, text: "john.doe@example.com", color: "text-blue-500" },
                  { icon: Github, text: "github.com/johndoe", color: "text-gray-700 dark:text-gray-300" },
                  { icon: Linkedin, text: "linkedin.com/in/johndoe", color: "text-blue-600" },
                ].map((contact, index) => (
                  <div
                    key={contact.text}
                    className={`flex items-center space-x-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-white/10 transform hover:scale-105 transition-all duration-300 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <contact.icon className={`h-6 w-6 ${contact.color}`} />
                    <span className="text-gray-700 dark:text-gray-300">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card
              className={`bg-white/80 dark:bg-white/10 border-gray-200/50 dark:border-white/20 backdrop-blur-xl transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-white text-2xl">Kirim Pesan</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Isi form di bawah ini dan saya akan merespons secepat mungkin.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">
                      Nama Depan
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-white/50 dark:bg-white/10 border-gray-300/50 dark:border-white/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">
                      Nama Belakang
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-white/50 dark:bg-white/10 border-gray-300/50 dark:border-white/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/50 dark:bg-white/10 border-gray-300/50 dark:border-white/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                    Subjek
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Mari diskusikan proyek Anda"
                    className="bg-white/50 dark:bg-white/10 border-gray-300/50 dark:border-white/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                    Pesan
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Ceritakan tentang proyek atau ide Anda..."
                    className="bg-white/50 dark:bg-white/10 border-gray-300/50 dark:border-white/20 focus:border-purple-500 dark:focus:border-purple-400 min-h-[120px] transition-all duration-300"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 text-lg py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200/50 dark:border-white/10 relative z-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
            © {new Date().getFullYear()} John Doe. Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </footer>
    </div>
  )
}
