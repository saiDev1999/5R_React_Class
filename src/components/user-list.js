import React from "react";
import useAxios from "./custom-hooks/use-axios";
import CustomSpinner from "./customSpinner/customSpinner";

function UserList() {
  const [users, error, loading] = useAxios("https://fakestoreapi.com/users");

  if (loading) {
    return <CustomSpinner />;
  }

  if (error) {
    return <h4>Something went wrong , please try again later</h4>;
  }

  return (
    <div>
      {users.map((eachUser) => {
        return (
          <>
            <h5>{eachUser.username}</h5>
          </>
        );
      })}
    </div>
  );
}

export default UserList;
