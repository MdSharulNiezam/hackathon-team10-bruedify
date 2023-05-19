import ContactUsNav from "../components/FormContactUsPageComp/ContactUsNav";
import ContactUsFooter from "../components/FormContactUsPageComp/ContactUsFooter";
// import ContactUsForm from "../components/FormContactUsPageComp/ContactUsForm";
import TestContactUsForm from "../components/FormContactUsPageComp/TestContactUsForm";

const ContactPage = () => {
    return (
        <div>
            <ContactUsNav />
            {/* <ContactUsForm /> */}
            <TestContactUsForm />
            <ContactUsFooter />
        </div>
    )
};

export default ContactPage;