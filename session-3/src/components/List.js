export default function List() {
  const arr = ["html", "css", "js", "react"];
  const li = arr.map((ele, i) => {
    return <li key={i}>{ele}</li>;
  });
  return (
    <div className="list">
      <ul>{li}</ul>
    </div>
  );
}
