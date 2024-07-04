import Table from "react-bootstrap/Table";

function RecipeTable(prop) {
  const { data } = prop;
  console.log(data);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Recipe Name</th>
          <th>Image</th>
          <th>Ingredients</th>
          <th>Instructions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachRecipe) => {
          const { id, name, image, ingredients, instructions } = eachRecipe;
          return (
            <>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <img src={image} width={200} height={200} alt={name} />
                </td>
                <td>
                  {ingredients.map((eachIngredient, index) => {
                    return <p>{`${index + 1} . ${eachIngredient}`}</p>;
                  })}
                </td>
                <td>
                  {instructions.map((EachInstruction, index) => {
                    return <p>{`${index + 1} . ${EachInstruction}`}</p>;
                  })}
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
}

export default RecipeTable;
