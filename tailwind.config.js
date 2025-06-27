module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E3A8A", // blue-800 - Deep academic blue
          900: "#1E40AF", // blue-900
          DEFAULT: "#1E3A8A", // blue-800
        },
        // Secondary Colors
        secondary: {
          50: "#F5F3FF", // violet-50
          100: "#EDE9FE", // violet-100
          200: "#DDD6FE", // violet-200
          300: "#C4B5FD", // violet-300
          400: "#A78BFA", // violet-400
          500: "#8B5CF6", // violet-500
          600: "#7C3AED", // violet-600 - Sophisticated purple
          700: "#6D28D9", // violet-700
          800: "#5B21B6", // violet-800
          900: "#4C1D95", // violet-900
          DEFAULT: "#7C3AED", // violet-600
        },
        // Accent Colors
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500 - Warm amber
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
          DEFAULT: "#F59E0B", // amber-500
        },
        // Background Colors
        background: "#FEFEFE", // white with subtle warmth
        surface: "#F8FAFC", // slate-50 - Light gray-blue
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800 - Rich charcoal
          secondary: "#6B7280", // gray-500 - Medium gray
        },
        // Status Colors
        success: "#10B981", // emerald-500 - Fresh green
        warning: "#F59E0B", // amber-500 - Consistent with accent
        error: "#EF4444", // red-500 - Clear red
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Inter', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'interactive': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      maxHeight: {
        '0': '0',
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}