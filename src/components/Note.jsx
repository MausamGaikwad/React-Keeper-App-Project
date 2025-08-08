function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h3>{props.number}</h3>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default Note;
