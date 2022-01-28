import {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { IEmojiData } from "emoji-picker-react";

const useEmojiPicker = (setText: Dispatch<SetStateAction<string>>) => {
  const [openPicker, setOpenPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (
        !pickerRef.current ||
        pickerRef.current.contains(e.target as Node) ||
        openRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setOpenPicker(false);
    };
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [pickerRef]);

  const onEmojiClick = (event: SyntheticEvent, emojiObject: IEmojiData) => {
    setText((prev) => prev.concat(emojiObject.emoji));
  };
  const togglePicker = () => {
    setOpenPicker(!openPicker);
  };

  return { openPicker, openRef, pickerRef, setOpenPicker, togglePicker, onEmojiClick };
};

export default useEmojiPicker;
