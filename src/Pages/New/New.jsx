import {useState} from 'react'
import "./New.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const New = ({ title, inputs }) => {

  const [file, setfile] = useState('');

  console.log(file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              file? URL.createObjectURL(file)
              :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} />
          </div>

          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <FileUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" 
                style={{ display: "none" }}
                onChange ={(e)=> setfile(e.target.files[0])} />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
