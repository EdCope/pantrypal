export const RecipeListItemTable = (props) => {
  const { recipe } = props

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Time (mins)</th>
          <th scope="col">Calories</th>
          <th scope="col">Portions</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{recipe.recipe.totalTime}</td>
          <td>
            {recipe.recipe.calories.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}{" "}
            kcal
          </td>
          <td>{recipe.recipe.yield}</td>
          <td>
            <a href={recipe.recipe.url} target="_blank">Link</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

