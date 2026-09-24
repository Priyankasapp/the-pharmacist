import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import FAQ from "@/components/Contact/FAQ/FAQ";

const  Contact = () => {
    return (
        <div style={{padding:"0 1.4rem"}}>
            <div className="container">
            <ContactForm/>
            <FAQ/>  
            </div>
           
        </div>
    );    
}
export default Contact;