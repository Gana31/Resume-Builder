import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-primary flex items-center justify-center">
      <div className="container mx-auto bg-white shadow-lg p-4 rounded-lg">
        <h1 className="text-2xl text-blue-900 font-semibold text-center mb-4">Contact Us</h1>
        <form  className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg">Name</label>
            <input
              type="text"
              name="name"
       
              className="py-2 px-3 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Email</label>
            <input
              type="email"
              name="email"
  
              className="py-2 px-3 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Subject</label>
            <input
              type="text"
              name="subject"
         
              className="py-2 px-3 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Message</label>
            <textarea
              name="message"
          
              className="py-2 px-3 rounded-lg border border-gray-300 h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4  rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;