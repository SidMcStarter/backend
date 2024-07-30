const notes = require("./notes.js");
const yargs = require("yargs");
const chalk = require("chalk");
const { type } = require("os");

// create add command
yargs.command({
  command: "add",
  describe: "adding a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },

  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// removing a note
yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// list all notes
yargs.command({
  command: "list",
  describe: "list all notes",
  handler: () => {
    notes.listNotes();
  },
});

// read a note
yargs.command({
  command: "read",
  describe: "read a note",
  handler: (argv) => {
    console.log("reading a note");
  },
});

yargs.parse();
