import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomTable from "../tables/table";
import { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.username, formData.password);

    const userform = {
      username: formData.username,
      password: formData.password,
    };

    const isUserExists = tableData.find(
      (eachRow) =>
        eachRow.username === formData.username &&
        eachRow.password === formData.password
    );

    if (isUserExists) {
      alert("already exists");
    } else {
      setTableData([...tableData, userform]);
      setFormData({ username: "", password: "" });
    }
  };

  const handleDelete = (index) => {
    console.log(index);
    const filteredData = tableData.filter((value, ind) => ind != index);

    setTimeout(() => {
      alert("record deleted success");
    }, 0);
    setTableData(filteredData);
  };
  const handleUpdate = (index) => {};

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={formData.username}
            name={"username"}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
            name={"password"}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <CustomTable
        tableRows={tableData}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

export default UserForm;
