//STYLES
import "./index.scss";

//ASSETS
// @ts-ignore
import { ReactComponent as BackIcon } from "../../../assets/back.svg";

//PACKAGE
import React, { useEffect, useState } from "react";

//CMP
import BaseInput from "../../../Components/Input";
import BaseButton from "../../../Components/Button";
import { inspireIdeaList, CaptionList } from "../../mock";
import ContentCard from "../../../Components/Content";

export default function InspirePage() {
  const [topic, setTopic] = useState("");
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [ideaList, setIdeaList] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState("");
  const [captionList, setCaptionList] = useState([]);

  const [step, setStep] = useState(1);

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };
  const handleBackMove = () => setStep((step) => (step > 1 ? step - 1 : step));
  const handleMoveToStep = (step) => {
    setStep(step);
  };
  const handleCreateIdea = (e) => {
    e.preventDefault();
    //@ts-ignore
    setIdeaList(inspireIdeaList);
  };

  const handleCreateCaption = () => {
    // @ts-ignore
    setCaptionList(CaptionList);
  };
  const btnSubmitClassName = isDisabledBtn ? "disabled" : "";

  useEffect(() => {
    topic ? setIsDisabledBtn(false) : setIsDisabledBtn(true);
  }, [topic]);
  return (
    <div className="inspire-page">
      {step !== 1 && (
        <div className="back-btn-container">
          <button onClick={handleBackMove}>
            <BackIcon />
          </button>
        </div>
      )}
      <h2>Get Inspired</h2>
      {step === 1 && (
        <>
          <p>
            Stick starring a blank page? Tell us what topic you have in mind and
            Skipli AI will generate a list of post ideas and captions for you.
          </p>
          <br />
          <p>What topic do you want a caption for</p>
          <div className="form-wrapper">
            <form className="topic">
              <BaseInput
                type="text"
                id="ftopic"
                name="ftopic"
                value={topic}
                placeholder="Enter a topic"
                onChange={handleTopicChange}
              />
              <br />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <BaseButton
                  type="submit"
                  className={btnSubmitClassName}
                  label="Generate ideas"
                  onClick={(e) => {
                    handleCreateIdea(e);
                    handleMoveToStep(2);
                  }}
                />
              </div>
            </form>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <p style={{ fontWeight: 500 }}>Choose an idea to build some posts</p>
          <div className="idea-list">
            {ideaList.map((item) => (
              <div
                className="idea-item"
                // @ts-ignore
                key={item.id}
                onClick={() => {
                  handleMoveToStep(3);
                  // @ts-ignore
                  setSelectedIdea(item.label || "Default Idea");
                }}
              >
                {
                  // @ts-ignore
                  item.label
                }
              </div>
            ))}
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h2>Your Idea</h2>
          <div className="form-wrapper">
            <div className="selected-idea">{selectedIdea}</div>
            <div className="btn-wrapper">
              <BaseButton
                label="Create Caption"
                className=""
                onClick={handleCreateCaption}
              />
            </div>
          </div>
          {captionList.length !== 0 && (
            <>
              <h2>Captions generated for you.</h2>
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
        </>
      )}
    </div>
  );
}
