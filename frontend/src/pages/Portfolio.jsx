import React, {useEffect, useState} from 'react'

export default function Portfolio(){
  const [projects,setProjects] = useState([])
  useEffect(()=>{
    // sample fetch; replace VITE_API_URL if needed
    fetch('/api/portfolio').then(r=>r.json()).then(setProjects).catch(()=>{})
  },[])
  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {projects.length ? projects.map(p=>(
          <div key={p.id} className="p-4 border rounded">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-slate-600">{p.description}</p>
            <p className="mt-2 text-sm">Tech: {p.technologies}</p>
          </div>
        )) : <p className="text-slate-600">No projects yet — use admin panel to add.</p>}
      </div>
    </section>
  )
}
