'use client'

import { Instructor } from '@/types'

const featuredInstructors: Instructor[] = [
  {
    id: '1',
    name: '김민지',
    university: 'Harvard University',
    major: 'Fine Arts',
    experience: 8,
    rating: 4.9,
    reviewCount: 127,
    specialties: ['포트폴리오 준비', '드로잉', '회화'],
    languages: ['한국어', '영어'],
    hourlyRate: 120000,
    available: true,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    university: 'Parsons School of Design',
    major: 'Fashion Design',
    experience: 6,
    rating: 4.8,
    reviewCount: 89,
    specialties: ['패션 디자인', '일러스트레이션', '브랜딩'],
    languages: ['영어', '한국어'],
    hourlyRate: 100000,
    available: true,
  },
  {
    id: '3',
    name: '박준호',
    university: 'MIT',
    major: 'Architecture',
    experience: 10,
    rating: 5.0,
    reviewCount: 156,
    specialties: ['건축 설계', '3D 모델링', 'CAD'],
    languages: ['한국어', '영어'],
    hourlyRate: 150000,
    available: false,
  },
]

export default function FeaturedInstructors() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            검증된 전문 강사진
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            세계 명문대 출신의 전문 강사들이 여러분의 꿈을 실현할 수 있도록 도와드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredInstructors.map((instructor) => (
            <div key={instructor.id} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-lg">
                      {instructor.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{instructor.name}</h3>
                    <p className="text-sm text-gray-500">{instructor.university}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  instructor.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {instructor.available ? '수업 가능' : '예약 중'}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">전공: {instructor.major}</p>
                <p className="text-sm text-gray-600 mb-2">경력: {instructor.experience}년</p>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(instructor.rating) 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {instructor.rating} ({instructor.reviewCount}개 리뷰)
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">전문 분야:</p>
                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  {instructor.hourlyRate.toLocaleString()}원/시간
                </span>
                <button onClick={() => alert(`${instructor.name} 강사의 상세 정보는 준비 중입니다. 곧 서비스될 예정입니다!`)} className="btn-primary text-sm py-2 px-4">
                  상세 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={() => alert('모든 강사 보기 기능은 준비 중입니다. 곧 서비스될 예정입니다!')} className="btn-secondary text-lg px-8 py-3">
            모든 강사 보기
          </button>
        </div>
      </div>
    </section>
  )
}