'use client'

import React from 'react'

interface Props {
  answers: Record<string, any>
}

const fontMap: Record<string, string> = {
  sans: 'ui-sans-serif, system-ui, sans-serif',
  serif: 'ui-serif, Georgia, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  inter: 'ui-sans-serif, system-ui, sans-serif',
  roboto: 'Roboto, "Helvetica Neue", Arial, sans-serif',
  playfair: '"Playfair Display", Georgia, serif',
  merriweather: 'Merriweather, "Times New Roman", serif',
  quicksand: 'Quicksand, "Comic Sans MS", cursive, sans-serif',
}

const radiusMap: Record<string, string> = {
  none: '0px',
  sm: '4px',
  md: '12px',
  lg: '20px',
  full: '9999px',
}

const shadowMap: Record<string, string> = {
  flat: 'none',
  subtle: '0 1px 3px rgba(0,0,0,0.12)',
  medium: '0 4px 12px rgba(0,0,0,0.15)',
  bold: '0 10px 30px rgba(0,0,0,0.25)',
}

const animClassMap: Record<string, string> = {
  none: '',
  fade: 'animate-fade',
  slide: 'animate-slide',
  bounce: 'animate-bounce',
}

export function MockSandbox({ answers }: Props) {
  const primaryColor = answers.primaryColor || '#6366f1'
  const fontFamily = fontMap[answers.typography] || fontMap.sans
  const borderRadius = radiusMap[answers.borderRadius] || radiusMap.md
  const boxShadow = shadowMap[answers.shadow] || shadowMap.subtle
  const animClass = animClassMap[answers.animation] || ''
  const isDark = typeof answers.features === 'string' && answers.features.toLowerCase().includes('dark')

  const containerStyle = {
    '--mock-primary': primaryColor,
    '--mock-radius': borderRadius,
    fontFamily,
    backgroundColor: isDark ? '#09090b' : '#ffffff',
    color: isDark ? '#fafafa' : '#111827',
  } as React.CSSProperties

  const cardStyle = {
    backgroundColor: isDark ? '#27272a' : '#ffffff',
    borderColor: isDark ? '#3f3f46' : '#e5e7eb',
    borderRadius,
    boxShadow,
  }

  const btnStyle = {
    backgroundColor: primaryColor,
    color: '#ffffff',
    borderRadius,
  }

  return (
    <div
      style={containerStyle}
      className="relative flex h-[600px] w-full flex-col overflow-hidden rounded-2xl border border-border transition-colors duration-500"
    >
      {/* Mock Navbar */}
      <header className="flex items-center justify-between border-b border-inherit px-6 py-4">
        <div className="text-xl font-bold">BrandLogo</div>
        <div className="flex gap-4">
          <div className="h-2 w-12 rounded-full bg-current opacity-20" />
          <div className="h-2 w-12 rounded-full bg-current opacity-20" />
        </div>
      </header>

      {/* Mock Hero */}
      <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <h1 className={`mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl ${animClass}`}>
          Welcome to the Future
        </h1>
        <p className="mb-8 max-w-md text-lg opacity-70">
          This is a live preview of how your website might look based on your selected styles and preferences.
        </p>

        {/* Mock Cards Row */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <div style={cardStyle} className={`border p-6 transition-all ${animClass}`}>
            <div
              className="mb-4 h-10 w-10 opacity-80"
              style={{ ...btnStyle, background: primaryColor }}
            />
            <h3 className="mb-2 text-xl font-bold">Feature One</h3>
            <p className="opacity-70 text-sm mb-4">
              Beautifully crafted design system adapting to your choices instantly.
            </p>
            <button style={btnStyle} className="px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>
          
          <div style={cardStyle} className={`border p-6 transition-all ${animClass}`}>
            <div
              className="mb-4 h-10 w-10 opacity-80"
              style={{ ...btnStyle, background: primaryColor }}
            />
            <h3 className="mb-2 text-xl font-bold">Feature Two</h3>
            <p className="opacity-70 text-sm mb-4">
              Real-time updates without refreshing. Perfect for visual experimentation.
            </p>
            <button style={{...btnStyle, backgroundColor: 'transparent', color: primaryColor, border: `2px solid ${primaryColor}`}} className="px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">
              Secondary
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
