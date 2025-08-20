

'use client'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            예체능 유학의 꿈을
            <br />
            <span className="text-primary-600">현실로 만들어보세요</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            하버드, 예일, 파슨스, MIT 출신 전문 강사와 함께하는 맞춤형 예체능 유학 준비.
            실기와 어학을 동시에 완성하는 통합 교육 프로그램을 경험해보세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={() => alert('강사 찾기 기능은 준비 중입니다. 곧 서비스될 예정입니다!')} className="btn-primary text-lg px-8 py-3">
              강사 찾기
            </button>
            <button onClick={() => alert('수업 안내 페이지는 준비 중입니다. 곧 서비스될 예정입니다!')} className="btn-secondary text-lg px-8 py-3">
              수업 안내
            </button>
            <button onClick={() => alert('무료 상담은 현재 준비 중입니다. 이메일로 문의해주세요: contact@moyestudio.com')} className="text-primary-600 hover:text-primary-700 font-medium">
              무료 상담 받기 →
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">검증된 전문 강사</h3>
              <p className="text-gray-600">명문대 출신 강사진의 체계적이고 전문적인 지도</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">실기 + 어학 통합</h3>
              <p className="text-gray-600">전공 실기와 언어 능력을 동시에 향상시키는 혁신적 커리큘럼</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">맞춤형 1:1 교육</h3>
              <p className="text-gray-600">개인의 목표와 수준에 맞는 완전 맞춤형 교육 프로그램</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}