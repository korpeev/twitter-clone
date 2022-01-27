import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
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
  const [file, setFile] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>("");
  const { addFormState, errors } = useAppSelector(selectTweetsSelector);
  const [isShow, setShow] = useState(false);
  const [errorText, setErrorText] = useState<ErrorText>({
    body: "",
    title: "",
  });
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const maxTextLength = 250;
  const textLength = maxTextLength - text.length;
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);
  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };
  const handleFileClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const currentFile = e.target.files[0];
    const reg = /\/(jpe?g|png|webp)/gim;
    if (!reg.test(currentFile.type)) {
      setErrorText({
        title: "Ошибка загрузки картинки",
        body: "Не корректный тип картинки",
      });
      setShow(true);
      return;
    }
    setFile(currentFile);
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
  const handleClearPreview = () => {
    setPreview(null);
    setFile(null);
    if (ref.current) {
      ref.current.value = "";
    }
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
    handleFileClick,
    preview,
    handleClearPreview,
    ref,
  };
};

export default useCreateTweet;
