import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ErrorText } from "./useTextArea";

const useFile = (
  setErrorText: (error: ErrorText) => void,
  setShow: (arg: boolean) => void
) => {
  const [preview, setPreview] = useState<string | null>("");
  const [file, setFile] = useState<File | null>();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

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
  const handleClearPreview = () => {
    setPreview(null);
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return { handleFileClick, file, setPreview, preview, handleClearPreview, inputRef };
};

export default useFile;
