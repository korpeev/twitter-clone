import { ChangeEvent, useState } from "react";

export type ErrorText = {
  body: string;
  title: string;
};
const useTextArea = () => {
  const [text, setText] = useState("");
  const [errorText, setErrorText] = useState<ErrorText>({
    body: "",
    title: "",
  });
  const maxTextLength = 250;
  const textLength = maxTextLength - text.length;
  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  };

  return { text, setText, setErrorText, textLength, errorText, handleChangeTextArea };
};

export default useTextArea;
