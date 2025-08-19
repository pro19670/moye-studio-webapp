export interface Instructor {
  id: string
  name: string
  university: string
  major: string
  experience: number
  rating: number
  reviewCount: number
  profileImage?: string
  specialties: string[]
  languages: string[]
  hourlyRate: number
  available: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: Instructor
  duration: number // weeks
  price: number
  category: 'intensive' | 'comprehensive' | 'specialty'
  subjects: string[]
  maxStudents: number
  currentStudents: number
}

export interface StudentRequest {
  id: string
  subject: string
  level: 'beginner' | 'intermediate' | 'advanced'
  location: string
  budget: number
  timeline: string
  status: 'active' | 'matched' | 'completed'
  createdAt: Date
}