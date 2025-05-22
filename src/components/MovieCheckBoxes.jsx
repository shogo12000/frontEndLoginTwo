export default function MovieCheckBoxes({myMovie}) {
  const { id, title, poster_path} = myMovie;
  const preferences = [
    "watched",
    "watching",
    "favorite",  
    "watch later",
    "bad",
  ];

  const updateCheckBox = (e)=>{
    console.log(`${e.target.name} is ${e.target.checked ? "checked" : "unchecked"}`);
    console.log({
      id: id,
      title: title,
      poster: poster_path,
      status: e.target.checked ? "checked" : "unchecked"
    })
  }

  return (
    <div className="flex flex-col gap-2 p-2">
      {preferences.map((label) => (
        <label key={label} className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            name={label}
            className="form-checkbox text-blue-500"
            onChange={updateCheckBox}
          />
          <span>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
        </label>
      ))}
    </div>
  );
}
