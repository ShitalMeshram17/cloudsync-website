import React from 'react'
export default function Hero(){
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-600">We Build Smart Digital Solutions</h1>
        <p className="mt-4 text-lg text-slate-600">Custom Websites, Apps, and Software tailored to your business.</p>
        <div className="mt-6 space-x-3">
          <a href="/contact" className="px-6 py-3 bg-sky-600 text-white rounded-lg">Get Quote</a>
          <a href="/services" className="px-6 py-3 border border-sky-600 rounded-lg">View Services</a>
        </div>
      </div>
    </section>
  )
}
