import React from "react";
import { Form, Link } from "react-router-dom";

export default function Contact() {

  const contact = {
    firstName: "Surendra",
    lastName: "Goswami",
    avatar: "/home/surendra/Downloads/user.jpeg",
    linkedin: "https://www.linkedin.com/in/surendra-goswami",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="contact" style={{ textAlign: "center" }}>
      <div>
        <img src={contact.avatar || null} />
      </div>

      <div>
        <h2>
          {contact.firstName || contact.lastName ? (
            <>
              {contact.firstName} {contact.lastName}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h2>

        {contact.twitter && (
          <p>
            <Link
              target="_blank"
              href={contact.linkedin}
            >
              {"linkedin"}
            </Link>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !"confirm"("Please confirm you want to delete this record.")
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
