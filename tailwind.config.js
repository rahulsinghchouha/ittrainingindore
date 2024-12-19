/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      translate: {
        '3d-x': '-1923.42px',
      },
      boxShadow:{
        imgShadow:'0px 10px 20px rgba(0,0,0,0.2) ',
        partnerShadow:'4px 4px 40px rgb(0 0 0 / 8%) ',
        exploreCardShad:'4px 4px 30px #0000000d',
        blogShadow:'3px 4px 40px 0 rgb(26 174 244 / 11%)',
        jobCardShadow:'5px 4px 35px 0 rgb(26 174 244 / 13%)',
        footFormSahd:'-2px -4px 40px 0 rgba(26, 174, 244, 0.17)',
        navShadow:'0 8px 40px 0 rgba(0, 0, 0, 0.04)',
        geiinquiryShad:'-4px 6px 40px 0 rgba(0, 0, 0, 0.2)',
        horizontaCard:'3px 4px 35px 0 rgba(0, 0, 0, 0.08)',
        aboutEnrollShadow:'11px 12px 40px 0 rgb(26 174 244 / 13%)',
        aboutEnrollnow:'5px 4px 43px 0 rgb(0 0 0 / 12%);',
        studentAboutSha:'3px 4px 40px 0 rgb(0 0 0 / 15%)',
        aboutFigCaptionShad:'5px 10px 35px 0 rgb(26 174 244 / 15%)',
        aboutPlacedShad:'9px 8px 40px 0 rgb(26 174 244 / 13%)',
        blogCardShado:'3px 4px 40px 0 rgb(26 174 244 / 12%)',
        blogCarditShado:'4px 4px 40px 0 rgb(26 174 244 / 14%)',
        testimonialCardShad:'5px 4px 40px 0 rgb(26 174 244 / 10%)',
        contactUsCardShad:'4px 4px 40px 0 rgb(26 174 244 / 12%)',
        contactUsForminput:'3px 4px 40px 0 rgb(26 174 244 / 2%)',
        whatsappButtonShad:'0px 2px 6px 1px rgba(0, 0, 0, 0.20)',
        courseDetailsCatShad:'3px 4px 30px 0 rgb(0 0 0 / 20%)',
      },
     
    
    },
  },
  plugins: [],
}

