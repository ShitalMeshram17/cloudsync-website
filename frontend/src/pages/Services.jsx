import React from 'react'
export default function Services(){
  const services = [
    {title:'Website Development', desc:'Responsive websites using modern frameworks.'},
    {title:'Mobile App Development', desc:'iOS & Android native and cross-platform apps.'},
    {title:'E-Commerce Solutions', desc:'Shopify, WooCommerce, custom stores.'},
    {title:'Custom Software', desc:'Bespoke backend and integration work.'},
    {title:'UI/UX Design', desc:'User-centered design and prototypes.'},
    {title:'Maintenance & Support', desc:'Ongoing support and monitoring.'}
  ]
  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {services.map(s=>(
          <div key={s.title} className="p-4 border rounded">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-slate-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
