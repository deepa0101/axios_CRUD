import Context from "./ContextProvider";
import { useContext } from "react";
function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =useContext(Context);
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-10 mx-auto col-lg-5">
            <h2 className="display-4 fw-bold lh-1 text-dark mb-4">
              Enter Your Data
            </h2>
          <form
            className="p-4 p-md-5 border rounded bg-light"
            onSubmit={(e) => handleFormSubmit(e, { name, email,phone })}
          >
            
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            
            <button className="btn btn-primary w-100" type="submit">
              Add To List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;