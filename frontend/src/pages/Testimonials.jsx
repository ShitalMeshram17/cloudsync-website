import React from 'react'
export default function Testimonials(){
  const items = [
    {name:'Asha', text:'Great work! Fast delivery.'},
    {name:'Ravi', text:'Professional team and clean UI.'}
  ]
  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {items.map(i=>(
          <div key={i.name} className="p-4 border rounded">
            <p className="text-slate-600">"{i.text}"</p>
            <p className="mt-2 font-semibold">— {i.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
