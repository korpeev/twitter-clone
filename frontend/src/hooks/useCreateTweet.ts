import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectTweetsSelector } from "../redux/selectors";
import { AddFormState } from "../redux/types";
import { fetchPostTweet } from "../redux/tweets/tweetsSlice";
import { ErrorText } from "./useTextArea";

const useCreateTweet = (
  setErrorText: Dispatch<SetStateAction<ErrorText>>,
  text: string,
  setText: Dispatch<SetStateAction<string>>
) => {
  const { addFormState, errors } = useAppSelector(selectTweetsSelector);
  const [isShow, setShow] = useState(false);
  const dispatch = useAppDispatch();
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
    isShow,
    setShow,
    handleAddTweet,
  };
};

export default useCreateTweet;
