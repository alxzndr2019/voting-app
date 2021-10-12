import { extendTheme } from "@chakra-ui/react"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
const theme = extendTheme({
    colors: {
      brand: {
        100: "#f5f5f5",
        // ...
        900: "#1a202c",
      },
      fade:{
        100:"#a0a5f2"
      },
      cta:{
        100:"#2130ff"
      }
    },
    fonts:{
        heading: "Montserrat",
        body: "Montserrat",
      },
     
      textStyles: {
        logo: {
          // you can also use responsive styles
          fontSize: ["25px", "30px"],
          fontWeight: "bold",
          lineHeight: "110%",
          letterSpacing: "-2%",
          color:"#6123cc"
        },
        navitem: {
          fontSize: ["10px", "19px"],
          fontWeight: "medium",
          lineHeight: "110%",
        },
        herotext:{
          fontSize: ["25px", "60px"],
          fontWeight: "bold",
          lineHeight: "110%",
        },
        
        herotextsub:{
          fontSize: ["10px", "20px"],
          fontWeight: "medium",
          lineHeight: "110%",
        },
        wwd: {
          fontSize: ["36px", "30px"],
          fontWeight: "medium",
          lineHeight: "110%",
        },
      },
    }
  
 

  )
  export default theme
