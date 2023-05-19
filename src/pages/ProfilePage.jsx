import ProfileSidebar from "../components/ProfileSidebar";
import Profile from "../components/Profile";
import IndexFooter from "../components/IndexPageComp/IndexFooter";
import IndexNav from "../components/IndexPageComp/IndexNav";

const ProfilePage = () => {
    return (
        <>
            <IndexNav />
            <div className="container mt-3">
                <h1>Profile</h1>
            </div>
            <div className="container mt-5 p-0">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileSidebar />
                    </div>
                    <div className="col-md-9">
                        <Profile />
                    </div>
                </div>
            </div>
            <IndexFooter />
        </>
    );
};

export default ProfilePage;