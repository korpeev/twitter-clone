import classNames from "classnames";
import { Notification } from "../";
import { BiImageAdd, BsEmojiSmile, IoMdCloseCircle } from "./tweet-icons";
import useCreateTweet from "../../hooks/useCreateTweet";
import Picker from "emoji-picker-react";
import useTextArea from "../../hooks/useTextArea";
import useFile from "../../hooks/useFile";
import useEmojiPicker from "../../hooks/useEmojiPicker";

const SendTweet = () => {
  const { errorText, handleChangeTextArea, textLength, text, setErrorText, setText } =
    useTextArea();
  const { isShow, handleAddTweet, setShow } = useCreateTweet(setErrorText, text, setText);

  const { preview, handleFileClick, inputRef, handleClearPreview } = useFile(
    setErrorText,
    setShow
  );
  const { onEmojiClick, openPicker, pickerRef, openRef, togglePicker } =
    useEmojiPicker(setText);

  return (
    <div className="p-4 flex border-b-2 border-gray-100">
      <Notification
        body={errorText.body}
        title={errorText.title}
        isShow={isShow}
        setShow={setShow}
      />
      <div className="h-12 w-26  lg:mb-0 mr-2">
        <img
          src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_0.png"
          alt="avatar"
          className="h-full w-full overflow-hidden rounded-full shadow"
        />
      </div>
      <div className="flex flex-col  max-w-xs relative">
        <textarea
          onChange={handleChangeTextArea}
          value={text}
          className={classNames("resize-none outline-none rounded-lg", {
            "outline-red-400": textLength < 0 || isShow,
          })}
          rows={5}
          cols={38}
        />
        {preview && preview.length > 0 && (
          <div className="relative">
            <IoMdCloseCircle
              onClick={handleClearPreview}
              className="absolute top-2 text-white cursor-pointer"
              size={30}
            />

            <img
              className="overflow-hidden w-full h-full rounded-md"
              src={preview}
              alt="preview"
            />
          </div>
        )}
        <div className="flex flex-row-reverse justify-between border-t-2 items-center border-gray-100">
          <div className="flex flex-row-reverse items-center">
            <button
              onClick={handleAddTweet}
              type="submit"
              disabled={textLength < 0 || isShow}
              className="btn-primary flex-1 bg-accent text-sm w-1/4 justify-center mt-2 disabled:bg-sky-300 disabled:cursor-not-allowed">
              Tweet
            </button>
            <span className="mt-2 text-xs mr-2">
              <span
                className={classNames({
                  "text-red-700 font-semibold": textLength < 0,
                })}>
                {textLength}
              </span>
              /250
            </span>
          </div>
          <div className="flex relative">
            <button ref={openRef} onClick={togglePicker} className="text-accent toggle">
              <BsEmojiSmile />
            </button>
            <div id={"picker"} ref={pickerRef}>
              {openPicker && (
                <Picker
                  native={false}
                  pickerStyle={{
                    position: "absolute",
                  }}
                  disableAutoFocus
                  preload={false}
                  onEmojiClick={onEmojiClick}
                />
              )}
            </div>
            <div className="ml-2 text-accent">
              <label htmlFor="image">
                <BiImageAdd size={28} />
              </label>
              <input
                ref={inputRef}
                id="image"
                accept="image/*"
                onChange={handleFileClick}
                type="file"
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SendTweet;
