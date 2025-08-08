import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpand, setIsExpand] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }
  function submitNote(event) {
    event.preventDefault();
    if (note.title.trim() == "" && note.content.trim() == "") {
      return;
    }
    props.onAdd(note);
    setNote({ title: "", content: "" });
  }
  function expand() {
    setIsExpand(true);
  }
  return (
    <form>
      {isExpand && (
        <input
          type="text"
          name="title"
          placeholder="Enter A Title..."
          value={note.title}
          onChange={handleChange}
        />
      )}
      <textarea
        onClick={expand}
        name="content"
        placeholder="Enter A Content..."
        value={note.content}
        onChange={handleChange}
        rows={isExpand ? 3 : 1}
      />
      <button onClick={submitNote}>Add</button>
    </form>
  );
}
export default CreateArea;
