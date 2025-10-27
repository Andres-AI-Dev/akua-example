import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

function FAQAccordion({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export function FAQ({ items }: FAQProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our AI services
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {items.map((item, index) => (
            <FAQAccordion key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
