import { Poppins, Nunito_Sans } from "next/font/google";

export const poppins = Poppins({
    weight:  ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins"
})

export const nunito_sans = Nunito_Sans({
    weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
    subsets: ["latin"],
    variable: "--font-nunitsans"
})