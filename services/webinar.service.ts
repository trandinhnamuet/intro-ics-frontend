const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3006'

export interface WebinarRegistrationPayload {
  fullName: string
  company: string
  position: string
  email: string
  phone: string
  field: string
}

export interface WebinarRegistrationRecord {
  id: string
  fullName: string
  company: string
  position: string
  email: string
  phone: string
  field: string
  registeredAt: string
}

class WebinarService {
  async register(payload: WebinarRegistrationPayload): Promise<{ message: string }> {
    const res = await fetch(`${API_BASE_URL}/api/webinar/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      throw new Error(data.message || `Lỗi đăng ký: ${res.status}`)
    }
    return data
  }

  async getCount(): Promise<number> {
    const res = await fetch(`${API_BASE_URL}/api/webinar/count`)
    if (!res.ok) return 0
    const data = await res.json()
    return data.total ?? 0
  }

  async getRegistrations(adminKey: string): Promise<WebinarRegistrationRecord[]> {
    const res = await fetch(`${API_BASE_URL}/api/webinar/registrations`, {
      headers: { 'x-admin-key': adminKey },
    })
    if (res.status === 401) throw new Error('Mật khẩu không đúng.')
    if (!res.ok) throw new Error('Không thể tải danh sách.')
    return res.json()
  }
}

export const webinarService = new WebinarService()
