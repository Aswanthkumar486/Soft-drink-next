export default function Contact({ contact }) {
  return (
    <div className="container my-5" id="contact">
      <h1 className="text-center mb-5">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <p className="card-text">
                <strong>Address:</strong> {contact.address}<br />
                <strong>Phone:</strong> {contact.phone}<br />
                <strong>Email:</strong> {contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
