import CourseCard from "../components/CoursesPageComp/CoursesCard";
import CourseNav from "../components/CoursesPageComp/CourseNav";
import CourseFooter from "../components/CoursesPageComp/CourseFooter";

const CoursesPage = () => {
    return (
        <div>
            <CourseNav />
            <CourseCard />
            <CourseFooter />
        </div>
    )
}

export default CoursesPage;