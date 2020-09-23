import React from "react";

export default function Contact(props) {
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">CONTACT</h4>
      Mollit ad id et aliquip do laborum sunt aliquip. Fugiat id laboris
      cupidatat do officia. Ullamco culpa anim aliqua fugiat. In incididunt
      ullamco elit aliqua dolor minim consequat. Mollit ut occaecat
      reprehenderit qui eiusmod velit eu. Ipsum ex occaecat esse sint ut minim
      cillum consequat in deserunt. Ut est Lorem eu quis consequat.
    </div>
  );
}
