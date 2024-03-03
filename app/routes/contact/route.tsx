// Dependencies
import React, { useState } from 'react'
// Models
import { IContactFormData, IContactError } from '../../globals/models/globals'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<IContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<IContactError>({
    name: '',
    email: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState('')
  const handleChange = (event: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const newErrors: IContactError = {
      name: '',
      email: '',
      message: '',
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (Object.values(newErrors).some((form) => form !== '')) {
      return setErrors(newErrors)
    }

    console.log('Form data:', formData)
    return setSuccessMessage('Form submitted successfully!')
  }
  return (
    <main className="bg-gray-800 text-white min-h-screen flex items-center justify-center">
      <section>
        <div className="w-96 mt-8 p-4 border border-gray-300 rounded bg-black text-white">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-500"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border border-gray-300 rounded ${
                  errors.name ? 'border-red-500' : ''
                } text-white bg-gray-700`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-500"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border border-gray-300 rounded ${
                  errors.email ? 'border-red-500' : ''
                } text-white bg-gray-700`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-500"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full p-2 border border-gray-300 rounded ${
                  errors.message ? 'border-red-500' : ''
                } text-white bg-gray-700`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
          {successMessage && (
            <p className="text-green-600 mt-4">{successMessage}</p>
          )}
        </div>
      </section>
    </main>
  )
}
export default ContactForm
