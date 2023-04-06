// items on email landing page
// Gmail - inbox - sent - drafts - trash -- contacts - jim - bob - mike -- emails

let gMail = {
  mailboxes: ["inbox", "sent", "drafts", "trash"],
  contacts: [
    { name: "Jim", email: "jim@gmail.com", lastMessage: "Hi" },
    { name: "John", email: "john@gmail.com", lastMessage: "Hello" },
    { name: "Mike", email: "mike@gmail.com", lastMessage: "Cheers" },
    { name: "Bob", email: "bob@gmail.com", lastMessage: "Bye" },
  ],
};

console.log(gMail.mailboxes[1]);
