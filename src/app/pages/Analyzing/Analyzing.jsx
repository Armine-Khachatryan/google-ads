import React from "react";
// Styles
import { Wrapper } from "./Analyzing.styles";
import TitleTwoColor from "../../components/TitleTwoColor/TitleTwoColor";
import ProgressBar from "../../components/ProgressBar";
import { useAppState } from "../../hooks/useForm";


const Analyzing = () => {

  const [state, setState] = useAppState();
  console.log(state, "analizyn")

  // useEffect(()=> {
  //   if(state.step !== 3 || !state.step) {
  //     navigate(GOOGLE_FORM_ACCOUNT)
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[state])
  return (
    <Wrapper>
      <TitleTwoColor
        title="Analyzing your"
        titleSec="Account..."
        desc="This will only take a minute."
      />
      <ProgressBar />
    </Wrapper>
  );
};

export default Analyzing;
