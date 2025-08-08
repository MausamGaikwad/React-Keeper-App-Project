import { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prev) => [...prev, newNote]);
  }
  function deleteNote(id) {
    setNotes((prev) => prev.filter((note, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <Footer />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          number={index + 1}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}
export default App;
