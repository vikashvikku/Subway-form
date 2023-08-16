import React, { useState } from "react";
import "./Identity.css";
import { useDropzone } from "react-dropzone";
import FolderIcon from "@mui/icons-material/Folder";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeIdentity } from "../../store/store";

const Identity = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      dispatch(changeIdentity(acceptedFiles[0]));
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  //

  const dispatch = useDispatch();

  // const Identity = useSelector((state) => {
  //   return state.names.identity;
  // });
  // console.log(Identity);

  return (
    <div className="identity">
      <div className="heading">Upload Identifications!</div>
      <div className="subheading">
        Acceptance form of identifications Id, Driving License, or College Id
      </div>

      <div className="drag">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the image here... </p>
          ) : (
            <div>
              <FolderIcon className="folder" style={{ fontSize: "2rem" }} />
              <p className="drag-image">
                Drag n drop the image here || Click to Select the Image
              </p>
            </div>
          )}
        </div>
        <div>
          {files.map((file) => {
            return (
              <div>
                <img
                  src={file.preview}
                  style={{
                    width: "250px",
                    height: "220px",
                    border: "3px solid #ccc",
                  }}
                  alt="preview"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Link to="/QR">
          <button className="next-identity">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Identity;
