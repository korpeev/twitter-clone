import classNames from "classnames";
import { ChangeEvent, useState } from "react";

const SendTweet = () => {
  const [text, setText] = useState("");
  const textLength = 250 - text.length;
  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };
  return (
    <div className="p-4 flex border-b-2 border-gray-100">
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
            "outline-red-400": textLength < 0,
          })}
          rows={5}
          cols={38}
        />
        <div className="flex flex-row-reverse border-t-2 items-center border-gray-100">
          <button
            disabled={textLength < 0}
            className="btn-primary text-sm w-1/4 justify-center mt-2 disabled:bg-sky-300 disabled:cursor-not-allowed">
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
      </div>
    </div>
  );
};
export default SendTweet;
