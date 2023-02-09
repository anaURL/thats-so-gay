/* @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: 
  [ "./node_modules/flowbite-react/**/*.js",
  "./pages/**/*.{html,js,jsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
 ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    colors: { 
      purple: '#6340F5',
      lime: '#4EF64E',
      greenish:'#39A886',
      green: '#6df900',
      yellow: '#ffff29',
      orange:'#ff8d00',
      pink: '#ff00ff',
      blue:'#00ffde',
      one:'#00d1d4',
      two:'#2e048e',
      three:'#aa56d4' ,
      white:'#FFFFFF'    
    }
  },
  screens: {
    xl: { max: '1279px' },
    // => @media (max-width: 1279px) { ... }

    lg: { max: '1023px' },
    // => @media (max-width: 1023px) { ... }

    md: { max: '767px' },
    // => @media (max-width: 767px) { ... }

    sm: { max: '639px' },
    // => @media (max-width: 639px) { ... }
  },
  
  plugins:
  [
  require('@tailwindcss/forms')
]
}




