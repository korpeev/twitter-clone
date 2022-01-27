import classNames from "classnames";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchPostTweet } from "../../redux/tweets/tweetsSlice";
import { Notification } from "../index";
import { selectTweetsSelector } from "../../redux/selectors";
import { AddFormState } from "../../redux/types";
import { BiImageAdd } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";

type ErrorText = {
  body: string;
  title: string;
};
const SendTweet = () => {
  const [text, setText] = useState("");
  const { addFormState, errors } = useAppSelector(selectTweetsSelector);
  const [isShow, setShow] = useState(false);
  const [errorText, setErrorText] = useState<ErrorText>({
    body: "",
    title: "",
  });
  const dispatch = useAppDispatch();
  const textLength = 250 - text.length;
  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const handleAddTweet = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!text.length) {
      setErrorText({
        title: "Ошибка валидаций",
        body: "Поле не должно быть пустым",
      });
      setShow(true);
      return;
    }
    if (addFormState === AddFormState.ERROR) {
      setErrorText({
        title: "Ошбика при отправке",
        body: errors?.message as string,
      });
      setShow(true);
      setText("");
      return;
    }
    dispatch(fetchPostTweet(text));
    setText("");
    setErrorText({} as ErrorText);
  };

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
