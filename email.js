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

//Get a list of mailbox names
console.log(appData.mailboxes);
//Get a list of emails
console.log(appData.contacts);
//Get the text of the second email in the visible list
console.log(appData.contacts[1].lastMessage);
//Mark an email as sent
console.log((appData.contacts[1].status = "sent"));
//Add a draft email to the drafts mailbox
let draftEmail = { Subject: "draft" };
console.log("Before: ", appData.drafts);
appData.drafts[0] = draftEmail;
console.log("After: ", appData.drafts);
