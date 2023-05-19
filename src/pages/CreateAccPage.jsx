import CreateAccNav from "../components/FormCreatePageComp/CreateAccNav";
import CreateAccFooter from "../components/FormCreatePageComp/CreateAccFooter";
import CreateAccForm from "../components/FormCreatePageComp/CreateAccForm";

const CreateAccPage = () => {
    return (
        <div>
            <CreateAccNav />
            <CreateAccForm />
            <br />
            <CreateAccFooter />
        </div>
    )
};

export default CreateAccPage;