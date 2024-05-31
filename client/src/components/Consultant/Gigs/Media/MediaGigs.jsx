import React, { useState } from "react";
import "./MediaGigs.css";
import { LuUploadCloud } from "react-icons/lu";
const MediaGigs = ({ gigs, setGigs }) => {
  const [fileName, setFileNames] = useState("");
  const [img, setImg] = useState([]);
  const handleMultiChange = (e) => {
    const { name, files, value } = e.target;
    let imgFiles = [];
    for (let i = 0; i < files.length; i++) {
      imgFiles?.push(files[i]);
      setImg([...img, URL.createObjectURL(files[i])]);
    }
    setGigs((prevGigs) => ({
      ...prevGigs,
      [name]: imgFiles || value,
    }));
  };

  const handleVideoChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const newGigsImages = [...gigs.gigsImages, files[0]];
      setFileNames(files[0].name);
      setGigs((prevGigs) => ({
        ...prevGigs,
        gigsImages: newGigsImages,
      }));
    }
  };
  return (
    <div className="media-gigs">
      <h4 className="my-4 fw-bold">Médias</h4>

      <h5>Gig Images</h5>
      <div className="row">
        <div className=" col-3 p-3">
          <div className="border rounded-4 border-2 media-img position-relative">
            <div
              className="position-absolute d-flex  "
              style={{ inset: "0", zIndex: "3" }}
            >
              <label
                htmlFor="media"
                style={{ inset: "0", zIndex: "3", cursor: "pointer" }}
                className="m-auto position-absolute gap-1 d-flex flex-column align-items-center justify-content-center"
              >
                <span className="p-2 border rounded">
                  <LuUploadCloud size={25} />
                </span>
                <span style={{ fontSize: "14px" }} className="navbar-active">
                  {gigs?.gigsImages
                    ? fileName
                      ? gigs?.gigsImages?.length - 1 + " x Images"
                      : gigs?.gigsImages?.length + " x Images"
                    : "Cliquez pour télécharger"}
                </span>
                <span style={{ fontSize: "14px" }}>ou glisser-déposer</span>
                <span style={{ fontSize: "9px" }}>
                  Max image 1:1 size 2MB And upto 5 image
                </span>
              </label>
              <input
                onChange={handleMultiChange}
                multiple
                className="position-absolute"
                style={{ zIndex: "-1", opacity: "0" }}
                id="media"
                name="gigsImages"
                type="file"
              />
            </div>
          </div>
        </div>
        <div
          className={`col-9 row ${
            img.length > 3 && "overflow-x-scroll flex-nowrap"
          }`}
        >
          {img?.map((val, index) => (
            <div className="col-4 p-3">
              <div key={index} className="media-img border  rounded-4 border-2">
                {val && <img className="w-100 rounded-4" src={val} alt="" />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 className="my-4">Gig Video</h5>
        <div className="border border-2 position-relative rounded rounded-4">
          <label
            htmlFor="gigVideo"
            className="gigVideo-label d-flex align-items-center justify-content-center flex-column gap-1"
            style={{ cursor: "pointer" }}
          >
            <span className="p-2 border rounded">
              <LuUploadCloud size={25} />
            </span>
            {fileName ? (
              fileName
            ) : (
              <span>
                <span
                  style={{ fontSize: "14px" }}
                  className="navbar-active mx-2"
                >
                  Cliquez pour télécharger
                </span>
                <span style={{ fontSize: "14px" }}>ou glisser-déposer</span>
                <div className="text-center" style={{ fontSize: "9px" }}>
                  Max video size 30MB
                </div>
              </span>
            )}
          </label>
          <input
            onChange={handleVideoChange}
            type="file"
            id="gigVideo"
            style={{ opacity: "0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaGigs;
