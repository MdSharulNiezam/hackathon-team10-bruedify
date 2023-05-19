import IndexFooter from "../components/IndexPageComp/IndexFooter";
import IndexNav from "../components/IndexPageComp/IndexNav";
import InternshipList from "../components/InternshipList"
import { Pagination } from "react-bootstrap";

const InternshipPage = () => {
    return (
        <>
            <IndexNav />
            <InternshipList />
            <div>
                <Pagination />
            </div>
            <IndexFooter />
        </>
    );
};

export default InternshipPage;