import IndexNav from "../components/IndexPageComp/IndexNav";
import IndexGreeting from "../components/IndexPageComp/IndexGreeting";
import IndexSection1 from "../components/IndexPageComp/IndexSection1";
import IndexSection2 from "../components/IndexPageComp/IndexSection2";
import IndexSection3 from "../components/IndexPageComp/IndexSection3";
import IndexFooter from "../components/IndexPageComp/IndexFooter";

const IndexPage = () => {
    return (
        <div>
            <IndexNav />
            <IndexGreeting />
            <IndexSection1 />
            <hr />
            <IndexSection2 />
            <hr />
            <IndexSection3 />
            <hr />
            <IndexFooter />
        </div>
    )
};

export default IndexPage;