import { InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import AuthButton from "./AuthButton";

function SigninModal() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <div className="center">
      <AuthButton onClick={handleShow}>Signin</AuthButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form className="center" onSubmit={handleSubmit}>
            {/* USERNAME INPUT */}
            <InputGroup className="mb-3">
              <InputGroup.Text>Username</InputGroup.Text>
              <FormControl
                placeholder="Your username"
                name="username"
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            {/* PASSWORD INPUT */}
            <InputGroup className="mb-3">
              <InputGroup.Text>Password</InputGroup.Text>
              <FormControl
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </InputGroup>
            <AuthButton type="submit">Signin</AuthButton>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SigninModal;
