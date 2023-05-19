import IntroNav from "../components/IntroductionPageComp/IntroNav"
import IntroSection1 from "../components/IntroductionPageComp/IntroSection1";
import IntroSection2 from "../components/IntroductionPageComp/IntroSection2";
import IntroFooter from "../components/IntroductionPageComp/IntroFooter";
import IntroSection3 from "../components/IntroductionPageComp/IntroSection3";

const IntroductionPage = () => {
    return (
        <div>
            <IntroNav />
            <IntroSection1 />
            <IntroSection2 />
            <IntroSection3 />
            <IntroFooter />
        </div>
    )
};

export default IntroductionPage;