const TestContactUsForm = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark">

      <div className="jumbotron-background">
        <img src="https://www.nosm.ca/wp-content/uploads/2018/04/iStock-637945400-e1622040381985.jpg" width={1800}
          className="blur " />
      </div>
      <div className="container justify-content-center text-white">
        <h1 className="text-center">Contact us</h1>
        <form className="divcontainer">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter the subject of your message" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Write anything..."></textarea>
          </div>
          {/* <!-- Submit Button trigger --> */}
          <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal">
            Submit
          </button>

          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Message Sent!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-dark">
                  Your message has been sent to us. We will back to you shortly!<br /> Thank you for your patience!!
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default TestContactUsForm;