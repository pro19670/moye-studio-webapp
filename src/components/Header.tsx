'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MoYe Studio</h1>
              <p className="text-xs text-gray-500">모두의예체능</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => alert('강사 찾기 페이지는 준비 중입니다. 곧 서비스될 예정입니다!')} className="text-gray-700 hover:text-primary-600 transition-colors">
              강사 찾기
            </button>
            <button onClick={() => alert('수업 안내 페이지는 준비 중입니다. 곧 서비스될 예정입니다!')} className="text-gray-700 hover:text-primary-600 transition-colors">
              수업 안내
            </button>
            <button onClick={() => alert('소개 페이지는 준비 중입니다. 곧 서비스될 예정입니다!')} className="text-gray-700 hover:text-primary-600 transition-colors">
              소개
            </button>
            <button onClick={() => alert('상담 문의는 현재 준비 중입니다. 이메일로 문의해주세요: contact@moyestudio.com')} className="text-gray-700 hover:text-primary-600 transition-colors">
              상담 문의
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button onClick={() => alert('로그인 기능은 준비 중입니다. 곧 서비스될 예정입니다!')} className="btn-secondary">
              로그인
            </button>
            <button onClick={() => alert('회원가입 기능은 준비 중입니다. 곧 서비스될 예정입니다!')} className="btn-primary">
              회원가입
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => alert('강사 찾기 페이지는 준비 중입니다. 곧 서비스될 예정입니다!')} className="text-gray-700 hover:text-primary-600 text-left">
                강사 찾기
              </button>
              <button onClick={() => alert('수업 안내 페이지는 준비 중입니다. 곧 서비스될 예정입니다!')} className="text-gray-700 hover:text-primary-600 text-left">
                수업 안내
              </button>
              <button onClick={() => alert('소개 페이지는 준비 중입니다. 곧 서비스될 예정입니다!')} className="text-gray-700 hover:text-primary-600 text-left">
                소개
              </button>
              <button onClick={() => alert('상담 문의는 현재 준비 중입니다. 이메일로 문의해주세요: contact@moyestudio.com')} className="text-gray-700 hover:text-primary-600 text-left">
                상담 문의
              </button>
              <hr className="my-4" />
              <div className="flex flex-col space-y-2">
                <button onClick={() => alert('로그인 기능은 준비 중입니다. 곧 서비스될 예정입니다!')} className="btn-secondary text-center">
                  로그인
                </button>
                <button onClick={() => alert('회원가입 기능은 준비 중입니다. 곧 서비스될 예정입니다!')} className="btn-primary text-center">
                  회원가입
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}