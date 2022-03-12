import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import BookIcon from "@material-ui/icons/Book";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import MicIcon from "@material-ui/icons/Mic";

function interests() {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'interêts</h2>
      <ul>
        <li>Informatique</li>
        <li>Musique</li>
        <li>Course à pied</li>
        <li>Photographie</li>
        <li>Lecture</li>
      </ul>
      <div className="interests">
        <CodeIcon style={{ fontSize: 40 }} />
        <BookIcon style={{ fontSize: 40 }} />
        <DirectionsRunIcon style={{ fontSize: 40 }} />
        <AddAPhotoIcon style={{ fontSize: 40 }} />
        <MicIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default interests;
