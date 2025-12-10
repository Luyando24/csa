import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, GraduationCap, Globe, Users, Clock, Award, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-brand-red text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl">
            Your Gateway to World-Class Education in China
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Secure your future with Chinese Scholarship Agency. We simplify university admissions and scholarship applications for students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="text-brand-red font-bold w-full sm:w-auto">
                Apply Now
              </Button>
            </Link>
            <Link href="/programs">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-brand-red">Who We Are</h2>
            <p className="text-lg text-muted-foreground">
              Chinese Scholarship Agency is a premier educational consultancy dedicated to helping international students achieve their academic dreams in China.
            </p>
            <p className="text-muted-foreground">
              With a team of international and Chinese professionals, we bridge the gap between you and top-tier Chinese institutions. Our expertise ensures a smooth application process, from choosing the right university to securing full or partial scholarships.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-blue">500+</span>
                <span className="text-sm text-muted-foreground">Partner Schools</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-blue">98%</span>
                <span className="text-sm text-muted-foreground">Success Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-blue">10k+</span>
                <span className="text-sm text-muted-foreground">Students Placed</span>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for Image */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
              <Users className="h-24 w-24 opacity-20" />
              <span className="sr-only">Team Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose CSA?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support to ensure your journey to China is hassle-free and successful.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Professional Team", desc: "Expert guidance from international and Chinese staff." },
              { icon: Clock, title: "Fast Processing", desc: "Expedited application handling and updates." },
              { icon: GraduationCap, title: "Direct Partnerships", desc: "Official representative of top Chinese universities." },
              { icon: Award, title: "Scholarship Experts", desc: "Maximize your chances of securing funding." },
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-brand-red mb-2" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps to Apply */}
      <section className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Simple Steps to Apply</h2>
          <p className="text-muted-foreground">Your journey to China starts here.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Register", desc: "Create your account and complete your profile." },
            { step: "02", title: "Select Program", desc: "Browse universities and choose your desired course." },
            { step: "03", title: "Submit Documents", desc: "Upload transcripts, passport, and other required files." },
            { step: "04", title: "Get Admitted", desc: "Receive your admission letter and visa documents." },
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl">
                {item.step}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-[2px] bg-muted -z-10" />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/auth/register">
            <Button size="lg" className="gap-2">
              Start Your Application <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container">
        <div className="bg-brand-blue rounded-3xl p-8 md:p-16 text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Study in China?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Don't miss the opportunity to study at world-renowned universities with scholarship opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="text-brand-blue font-bold">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
