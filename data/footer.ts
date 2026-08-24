import { time } from "console";

export const FOOTER_LINKS ={
    legal:[
        {label:"Terms & Conditions", href:"/terms"},
        {label:"Privacy Policy", href:"/privacy-policy"},
        {label:"Cookie Policy", href:"/cookie-policy"},
        {label:"Complaints Procedure", href:"/complaints-preocedure"},
        {label:"Accessibility Statement", href:"/accessibility"},
        {label:"About Us", href:"/about"}
    ],
    information:{
        address:"10 High Street, London, UK",
        number:"+44 1234 567 890",
        email:"contact@yourphoarmacy.co.uk"
    },
    regulatory:{
        gphc:"Pharmacy:1234567 ",
        Superintendent:"Dr.Sarah Johnson \n GPhC Reg:2345678",
        pharmacyOwner:"Digital Health Pharmacy Ltd \n Company No: 12345678"
    },
    openingHours:[
        {day:"Monday-Friday",time:"09:00AM to 06:00PM"},
        {day:"Saturday", time:"11:00AM to 03:00PM"},
        {day:"Sunday", time:"Emergency Only"}
    ],
};