import JobList from "../components/JobList";
import IndexFooter from "../components/IndexPageComp/IndexFooter";
import IndexNav from "../components/IndexPageComp/IndexNav";


const JobPage = () => {
    return (
        <>
            <IndexNav />
            <JobList />
            <IndexFooter />
        </> 
    );
};

export default JobPage;