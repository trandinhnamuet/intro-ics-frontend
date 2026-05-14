interface RecruitmentApplicationPayload {
  fullName: string
  dateOfBirth: string
  phoneNumber: string
  email: string
  position: string
  experienceYears: string
  profileLink?: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3006'

class RecruitmentService {
  async submitApplication(
    payload: RecruitmentApplicationPayload,
    cvFile: File,
  ): Promise<{ message: string }> {
    const formData = new FormData()
    formData.append('fullName', payload.fullName)
    formData.append('dateOfBirth', payload.dateOfBirth)
    formData.append('phoneNumber', payload.phoneNumber)
    formData.append('email', payload.email)
    formData.append('position', payload.position)
    formData.append('experienceYears', payload.experienceYears)

    if (payload.profileLink) {
      formData.append('profileLink', payload.profileLink)
    }

    formData.append('cv', cvFile)

    const response = await fetch(`${API_BASE_URL}/api/recruitment/apply`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `Failed to submit application: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }
}

export const recruitmentService = new RecruitmentService()
export type { RecruitmentApplicationPayload }
