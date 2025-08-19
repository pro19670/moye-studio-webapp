'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MoYe Studio</h1>
              <p className="text-xs text-gray-500">모두의예체능</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/instructors" className="text-gray-700 hover:text-primary-600 transition-colors">
              강사 찾기
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-primary-600 transition-colors">
              수업 안내
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              소개
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              상담 문의
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login" className="btn-secondary">
              로그인
            </Link>
            <Link href="/signup" className="btn-primary">
              회원가입
            </Link>
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
              <Link href="/instructors" className="text-gray-700 hover:text-primary-600">
                강사 찾기
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-primary-600">
                수업 안내
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600">
                소개
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600">
                상담 문의
              </Link>
              <hr className="my-4" />
              <div className="flex flex-col space-y-2">
                <Link href="/login" className="btn-secondary text-center">
                  로그인
                </Link>
                <Link href="/signup" className="btn-primary text-center">
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}