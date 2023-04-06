// items on email landing page

let appData = {
  name: "gmail",
  mailboxes: ["inbox", "outbox", "drafts", "trash"],
  contacts: [
    { name: "Jim", email: "jim@gmail.com", lastMessage: "Hi" },
    { name: "John", email: "john@gmail.com", lastMessage: "Hello" },
    { name: "Mike", email: "mike@gmail.com", lastMessage: "Cheers" },
    { name: "Bob", email: "bob@gmail.com", lastMessage: "Bye" },
  ],

  inbox: [{ from: "Jim" }, { from: "John" }, { from: "Mike" }, { from: "Bob" }],

  outbox: [
    { sent: "Jim" },
    { sent: "John" },
    { sent: "Mike" },
    { sent: "Bob" },
  ],

  drafts: [
    { from: "Jim" },
    { from: "John" },
    { from: "Mike" },
    { from: "Bob" },
  ],
};
