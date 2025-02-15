const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

const getNotes = () => {
  return "Your Notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("added a new note");
  } else {
    console.log("Title already exists");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// returns JSON object
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const data = dataBuffer.toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const newNotes = notes.filter((note) => note.title !== title);
  if (notes.length === newNotes.length) {
    console.log(chalk.bgRed("No Note Removed"));
  } else {
    console.log(chalk.bgGreen("Note Removed"));
    saveNotes(newNotes);
  }
};

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(note.title);
  });
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
