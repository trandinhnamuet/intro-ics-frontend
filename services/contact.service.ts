interface ContactPayload {
  fullName: string
  email: string
  phone: string
  content?: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3006'

class ContactService {
  async sendContact(payload: ContactPayload): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `Gửi liên hệ thất bại: ${response.status}`)
    }

    return response.json()
  }
}

export const contactService = new ContactService()
export type { ContactPayload }
