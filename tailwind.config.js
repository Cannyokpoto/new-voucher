/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '80px': '80px',
        '50px': '50px',
        '40px': '40px',
        '35px': '35px',
        '30px': '30px',
        '25px': '25px',
        '20px': '20px',
        '17px': '17px',
        '15px': '15px',
        '14px': '14px',
        '13px': '13px',
        '10px': '10px',
        '8px': '8px',
      },


      width: {
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '80px': '80px',
        '100px': '100px',
        '120px': '120px',
        '150px': '150px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',
        '350px': '350px',
        '450px': '450px',
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',
        '100vw': '100vw',
        '99w': '99vw',
        '95vw': '95vw',
        '90vw': '90vw',
        '85vw': '85vw',
        '80vw': '80vw',
        '70vw': '70vw',
        '60vw': '60vw',
        '50vw': '50vw',
        '40vw': '40vw',
        '30vw': '30vw',
        '20': '20%',
        '25': '25%',
        '30': '30%',
        '40': '40%',
        '45': '45%',
        '50': '50%',
        '51': '51%',
        '55': '55%',
        '60': '60%',
        '65': '65%',
        '70': '70%',
        '75': '75%',
        '80': '80%',
        '85': '85%',
        '90': '90%',
        '95': '95%',
        '100': '100%',
      },

      height: {
        '2px': '2px',
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '80px': '80px',
        '100px': '100px',
        '150px': '150px',
        '200px': '200px',
        '250px': '250px',
        '270px': '270px',
        '280px': '280px',
        '300px': '300px',
        '315px': '315px',
        '350px': '350px',
        '400px': '400px',
        '430px': '430px',
        '450px': '450px',
        '500px': '500px',
        '550px': '550px',
        '580px': '580px',
        '600px': '600px',
        '700px': '700px',
        '800px': '800px',
        '900px': '900px',
        '20': '20%',
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '51': '51%',
        '60': '60%',
        '65': '65%',
        '70': '70%',
        '75': '75%',
        '80': '80%',
        '85': '85%',
        '90': '90%',
        '95': '95%',
        '100': '100%',
        '100vh': '100vh',
        '90vh': '90vh',
        '80vh': '80vh',
        '300px': '300px',
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',
      },

      colors: {
        vogueRed: "#ff0000",
        primary: "#fb8500",
        secondary: "#5c8001",
        third: "#A49C5A",
        vogueWhite: "#ffffff",
        vogueBlack: "#1F1F1F",
        fadedGray: '#D5D5D5',
        fabricGray: '#a4a1a1',
        vogueYello: '#F5C700',
        paleYellow: '#A49C5A',
        discountGreen: '#1FAF38',
        discountBlue: '#0057FF',
        overlay: 'rgb(23, 23, 23, 0.7)'
      },

      gap: {
        '0.5': '5px',
        '1': '10px',
        '2': '20px',
        '3': '30px',
        '4': '40px',
        '5': '50px',
        '8': '80px',
        '9': '90px',
        '10': '100px',
        '15': '150px',
        '20': '200px',
        '40': '400px',
        '50': '500px',
      },

      spacing: {
        '0.5': '5px',
        '1': '10px',
        '1.5': '15px',
        '2': '20px',
        '3': '30px',
        '4': '40px',
        '5': '50px',
        '7': '70px',
        '8': '80px',
        '9': '90px',
        '10': '100px',
        '11': '110px',
        '12': '120px',
        '13': '130px',
        '14': '140px',
        '15': '150px',
        '20': '200px',
        '25': '250px',
        '30': '300px',
        '35': '350px',
        '40': '400px',
        '50': '500px',
        '60': '600px',
        '70': '700px',
        '80': '800px',
        '90': '900px',
        '50%': '50%'
      },

      borderRadius: {
        '4': '4px',
        '5': '5px',
        '10': '10px',
        '20': '20px',
      },

      screens: {
        'large': '1024px',
        'small': '300px',
      }
    },
  },
  plugins: [],
}

