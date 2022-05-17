import "../styles/footer.scss";
import "../styles/globals.scss";
import "../styles/initial.scss";
import "../styles/option.scss";
import "../styles/progress.scss";
import "../styles/quiz.scss";
import "../styles/results.scss";
import "../styles/score.scss";
import "../styles/settings.scss";

import type { AppProps } from "next/app";
import { QuizProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
  );
};

export default MyApp;
