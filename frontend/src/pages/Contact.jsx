import React, {useState} from 'react'

export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',phone:'',message:''})
  const [status,setStatus] = useState(null)
  async function submit(e){
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/contact', {
      method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)
    })
    const data = await res.json()
    setStatus(data.success ? 'sent' : 'error')
  }
  return (
    <section className="container mx-auto p-6 max-w-xl">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-4" onSubmit={submit}>
        <input className="w-full p-3 border rounded mt-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/>
        <input className="w-full p-3 border rounded mt-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/>
        <input className="w-full p-3 border rounded mt-2" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
        <textarea className="w-full p-3 border rounded mt-2" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required/>
        <button type="submit" className="mt-3 px-4 py-2 bg-sky-600 text-white rounded">Send</button>
      </form>
      {status === 'sent' && <p className="mt-3 text-green-600">Message sent — we'll contact you soon.</p>}
      {status === 'error' && <p className="mt-3 text-red-600">Failed to send message.</p>}
    </section>
  )
}
