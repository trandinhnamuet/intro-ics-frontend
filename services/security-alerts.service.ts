export interface SecurityAlert {
  id: string
  title: string
  summary: string
  severity: 'critical' | 'high' | 'medium' | 'low' | 'info'
  cve_ids?: string
  affected_systems?: string
  recommendation?: string
  source?: string
  is_active: boolean
  alert_date: string
  created_at: string
  updated_at: string
}

export interface SecurityAlertsResponse {
  data: SecurityAlert[]
  total: number
  page: number
  limit: number
}

export interface CreateSecurityAlertDto {
  title: string
  summary: string
  severity?: string
  cve_ids?: string
  affected_systems?: string
  recommendation?: string
  source?: string
  is_active?: boolean
  alert_date?: string
}

export interface UpdateSecurityAlertDto {
  title?: string
  summary?: string
  severity?: string
  cve_ids?: string
  affected_systems?: string
  recommendation?: string
  source?: string
  is_active?: boolean
  alert_date?: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3007'

class SecurityAlertsService {
  private async fetchApi(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}/api/security-alerts${endpoint}`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }
    return response.json()
  }

  async getAllAlerts(
    page = 1,
    limit = 10,
    activeOnly = false,
  ): Promise<SecurityAlertsResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    })
    if (activeOnly) params.append('activeOnly', 'true')
    return this.fetchApi(`?${params.toString()}`)
  }

  async getLatestAlerts(count = 3): Promise<SecurityAlert[]> {
    return this.fetchApi(`/latest?count=${count}`)
  }

  async getAlertById(id: string): Promise<SecurityAlert> {
    return this.fetchApi(`/${id}`)
  }

  async createAlert(data: CreateSecurityAlertDto): Promise<SecurityAlert> {
    return this.fetchApi('', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateAlert(id: string, data: UpdateSecurityAlertDto): Promise<SecurityAlert> {
    return this.fetchApi(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteAlert(id: string): Promise<void> {
    await this.fetchApi(`/${id}`, { method: 'DELETE' })
  }
}

export const securityAlertsService = new SecurityAlertsService()
