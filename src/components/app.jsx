import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function addnote(newnote) {
    setnotes((prevvalue) => {
      return [...prevvalue, newnote];
    });
  }
  function deletenote(id) {
    setnotes((prevvalue) => {
      return prevvalue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            delete={deletenote}
            image={ <img src ="https://img.icons8.com/pastel-glyph/512/trash.png" alt ="" height="15px" width="15px"/> }
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
