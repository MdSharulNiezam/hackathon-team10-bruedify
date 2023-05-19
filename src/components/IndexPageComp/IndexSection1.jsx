import { Link } from "react-router-dom";

const IndexSection1 = () => {
  return (
    <div className="Container p-5">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.debt.org/wp-content/uploads/2013/04/Student-Internship.jpg" class="d-block mx-auto" style={{ width: "1200px", height: "460px", borderRadius: "3%" }} alt="..." />
          </div>
          <div class="carousel-item">
            <Link to={'/Index/Courses'}>
              <img src="https://previews.123rf.com/images/melpomen/melpomen1604/melpomen160400098/54662672-businessman-drawing-online-courses-concept-on-blurred-abstract-background.jpg" class="d-block mx-auto" style={{ width: "1200px", height: "460px", borderRadius: "3%" }} alt="..." />
            </Link>
          </div>
          <div class="carousel-item">
            <img src="https://acrpkids.org/wp-content/uploads/2016/09/banner-job.png" class="d-block mx-auto" style={{ width: "1200px", height: "460px", borderRadius: "3%" }} alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>
  )
}

export default IndexSection1;