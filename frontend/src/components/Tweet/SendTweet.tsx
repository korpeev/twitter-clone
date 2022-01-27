import classNames from "classnames";
import { Notification } from "../";
import { BiImageAdd, BsEmojiSmile } from "./tweet-icons";
import useCreateTweet from "../../hooks/useCreateTweet";

const SendTweet = () => {
  const {
    errorText,
    isShow,
    handleChangeTextArea,
    handleAddTweet,
    textLength,
    text,
    setShow,
  } = useCreateTweet();

  return (
    <form className="p-4 flex border-b-2 border-gray-100">
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
      <div className="flex flex-col max-w-xs">
        <textarea
          onChange={handleChangeTextArea}
          value={text}
          className={classNames("resize-none outline-none rounded-lg", {
            "outline-red-400": textLength < 0 || isShow,
          })}
          rows={5}
          cols={38}
        />
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
          <div className="flex ">
            <button className="text-accent">
              <BsEmojiSmile />
            </button>
            <button className="ml-2 text-accent">
              <BiImageAdd size={28} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SendTweet;
