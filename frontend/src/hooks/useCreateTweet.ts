import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectTweetsSelector } from "../redux/selectors";
import { AddFormState } from "../redux/types";
import { fetchPostTweet } from "../redux/tweets/tweetsSlice";

type ErrorText = {
  body: string;
  title: string;
};
const useCreateTweet = () => {
  const [text, setText] = useState("");
  const { addFormState, errors } = useAppSelector(selectTweetsSelector);
  const [isShow, setShow] = useState(false);
  const [errorText, setErrorText] = useState<ErrorText>({
    body: "",
    title: "",
  });
  const dispatch = useAppDispatch();
  const maxTextLength = 250;
  const textLength = maxTextLength - text.length;
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

  return {
    text,
    setText,
    errorText,
    setErrorText,
    isShow,
    setShow,
    handleAddTweet,
    handleChangeTextArea,
    textLength,
  };
};

export default useCreateTweet;
