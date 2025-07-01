module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a", // blue-800
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
        },
        secondary: {
          DEFAULT: "#7c3aed", // violet-600
          50: "#f5f3ff", // violet-50
          100: "#ede9fe", // violet-100
          500: "#8b5cf6", // violet-500
          600: "#7c3aed", // violet-600
          700: "#6d28d9", // violet-700
        },
        accent: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          400: "#fbbf24", // amber-400
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
        },
        background: "#f9fafb", // gray-50
        surface: "#ffffff", // white
        text: {
          primary: "#111827", // gray-900
          secondary: "#6b7280", // gray-500
        },
        success: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
        },
        warning: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb", // amber-50
        },
        error: {
          DEFAULT: "#ef4444", // red-500
          50: "#fef2f2", // red-50
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section-title': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'card-title': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 6px 8px -1px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}