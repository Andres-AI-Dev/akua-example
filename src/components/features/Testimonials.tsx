import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

function TestimonialCard({ name, role, company, content, rating }: Testimonial) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{content}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">
            {role} at {company}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied businesses transforming with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
