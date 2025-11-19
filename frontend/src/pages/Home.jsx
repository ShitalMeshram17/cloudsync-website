import React from 'react'
import Hero from '../components/Hero'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-4">
          <div className="p-4 border rounded">Web Development</div>
          <div className="p-4 border rounded">App Development</div>
          <div className="p-4 border rounded">UI/UX</div>
          <div className="p-4 border rounded">Software Solutions</div>
        </div>

        <section className="mt-8">
          <h3 className="text-xl font-semibold">Why Choose Us</h3>
          <ul className="list-disc ml-6 mt-3 text-slate-600">
            <li>Fast delivery</li>
            <li>Affordable cost</li>
            <li>High quality</li>
            <li>Support</li>
          </ul>
        </section>
      </section>
    </div>
  )
}
