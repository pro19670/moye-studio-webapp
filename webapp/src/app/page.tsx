import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedInstructors from '@/components/FeaturedInstructors'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedInstructors />
      
      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              맞춤형 교육 프로그램
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              개인의 목표와 수준에 맞는 다양한 교육 프로그램을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Intensive Course */}
            <div className="card p-8">
              <div className="mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">방학 집중 과정</h3>
                <p className="text-gray-600 mb-4">
                  2-4주간의 단기 집중 과정으로 방학 기간을 활용한 실력 향상 프로그램
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  하루 4-6시간 집중 수업
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  포트폴리오 개발 중심
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  이중 언어 수업 진행
                </div>
              </div>

              <button className="btn-primary w-full">자세히 보기</button>
            </div>

            {/* Comprehensive Course */}
            <div className="card p-8">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">종합 유학 준비</h3>
                <p className="text-gray-600 mb-4">
                  3-6개월간의 체계적인 장기 과정으로 입시부터 입학까지 전체 과정 지원
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  포트폴리오 완성 지원
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  면접 코칭 및 에세이 지도
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  입학 과정 전체 지원
                </div>
              </div>

              <button className="btn-primary w-full">자세히 보기</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            지금 시작해보세요
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            무료 상담을 통해 개인 맞춤형 학습 계획을 세워보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
              무료 상담 예약
            </button>
            <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-primary-700 transition-colors">
              강사 둘러보기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}