export default function Form() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
      }}
    >
      <label>Name</label>
      <input type="text" placeholder="your name" name="username" />
      <br />
      <label>Password</label>
      <input type="password" placeholder="your password" name="password" />
      <br />
      <label>Gender</label>
      <select name="gender">
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <br />
      <input type="submit" />
    </form>
  );
}
