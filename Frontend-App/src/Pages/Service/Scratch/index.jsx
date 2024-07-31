//STYLES
import "./index.scss";

//PACKAGE
import React, { useEffect, useMemo, useState } from "react";

//CMP
import Card from "../../../Components/Card";
import BaseInput from "../../../Components/Input";
import BaseSelect from "../../../Components/Select";
import BaseButton from "../../../Components/Button";
import ContentCard from "../../../Components/Content";

//ASSETS
// @ts-ignore
import FacebookIcon from "../../../assets/facebook.svg";
// @ts-ignore
import TwitterIcon from "../../../assets/twitter.svg";
// @ts-ignore
import InstagramIcon from "../../../assets/instagram.svg";
// @ts-ignore
import { ReactComponent as BackIcon } from "../../../assets/back.svg";

//MOCK
import { CaptionList, captionToneList } from "../../mock";

export default function ScratchPage() {
  const [postType, setPostType] = useState("");
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");
  const [selectedToneId, setSelectedToneId] = useState(captionToneList[0].id);
  const [captionList, setCaptionList] = useState([]);
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);

  const Step2Title = useMemo(() => {
    if (postType === "facebook") {
      return "Facebook";
    } else if (postType === "instagram") {
      return "Instagram";
    } else if (postType === "twitter") {
      return "Twitter";
    } else {
      return "Facebook";
    }
  }, [postType]);

  useEffect(() => {
    setCaptionList([]);
  }, [postType]);
  useEffect(() => {
    if (topic && selectedToneId) {
      setIsDisabledBtn(false);
    } else {
      setIsDisabledBtn(true);
    }
  }, [topic, selectedToneId]);

  const handleSelectPostType = (type) => {
    setPostType(type);
  };
  const handleMoveToStep = (step) => {
    setStep(step);
  };
  const handleBackMove = () => setStep((step) => (step > 1 ? step - 1 : step));
  const handleChangeTopic = (event) => setTopic(event.target.value);
  const handleCreateCaption = (event) => {
    event.preventDefault();
    // @ts-ignore
    setCaptionList(CaptionList);
  };
  const handleChangeCaptionTone = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const id = el.getAttribute("id");
    id && setSelectedToneId(id);
  };
  const btnSubmitClassName = isDisabledBtn ? "disabled" : "";
  return (
    <div className="scratch-page">
      {step !== 1 && (
        <div className="back-btn-container">
          <button onClick={handleBackMove}>
            <BackIcon />
          </button>
        </div>
      )}
      {step === 1 && (
        <>
          <h2>Generate unique captions from scratch</h2>
          <p>
            Choose a type of post you want caption for and let Skipli AI write
            for you
          </p>
          <br />
          <p>What kind of post do you want a caption for</p>
          <div
            className="card-container"
            style={{
              width: "30rem",
              display: "flex",
              flexDirection: "column",
              rowGap: "1rem",
            }}
          >
            <button
              onClick={() => {
                handleSelectPostType("facebook");
                handleMoveToStep(2);
              }}
            >
              <Card
                title="Facebook post"
                subtitle="Generate caption for a post"
                image={FacebookIcon}
              />
            </button>
            <button
              onClick={() => {
                handleSelectPostType("instagram");
                handleMoveToStep(2);
              }}
            >
              <Card
                title="Instagram post"
                subtitle="Generate caption for a post"
                image={InstagramIcon}
              />
            </button>
            <button
              onClick={() => {
                handleSelectPostType("twitter");
                handleMoveToStep(2);
              }}
            >
              <Card
                title="Twitter post"
                subtitle="Generate caption for a post"
                image={TwitterIcon}
              />
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <h2>{Step2Title} post</h2>
          <div className="form-wrapper">
            <form>
              <label>What topic do you want a caption for ?</label>
              <BaseInput
                type="text"
                id="ftopic"
                name="ftopic"
                value={topic}
                placeholder="Enter a topic"
                onChange={handleChangeTopic}
              />
              <br />
              <label>What should your caption sound like?</label>
              <BaseSelect
                id="fcaption"
                name="fcaption"
                options={captionToneList}
                onChange={handleChangeCaptionTone}
              />
              <br />
              <div className="btn-container">
                <BaseButton
                  className={btnSubmitClassName}
                  label={"Generate caption"}
                  type="submit"
                  onClick={handleCreateCaption}
                />
              </div>
            </form>
          </div>
          {captionList.length !== 0 && <h2>Captions generated for you.</h2>}
          <div className="form-result">
            {captionList.length !== 0 &&
              captionList.map((item, idx) => (
                // @ts-ignore
                <ContentCard
                  key={idx}
                  // @ts-ignore
                  content={item.content}
                  // @ts-ignore
                  tag={item.tag}
                  buttons={{ first: "Share", second: "Save" }}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
