import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { chatConfig, searchConfig } from "./config";
import Footer from "./footer";
import Header from "./header";
import { IsChatEnabled } from "../config/VerticalConfig";
import { ChatHeadlessProvider } from "@yext/chat-headless-react";
import { ChatPopUp } from "@yext/chat-ui-react";

type Props = {
  _site?: any;
  children?: React.ReactNode;
};
const PageLayout = ({ _site, children }: Props) => {
  return (
    <div className="min-h-screen">
      {/* <Header _site={_site} /> */}
      <div className="py-8">
        <SearchHeadlessProvider searcher={provideHeadless(searchConfig)}>
          {children}
        </SearchHeadlessProvider>
      </div>
      {IsChatEnabled &&
        typeof window !== "undefined" &&
        import.meta.env.YEXT_PUBLIC_CHAT_APIKEY &&
        import.meta.env.YEXT_PUBLIC_CHAT_BOTID && (
          <ChatHeadlessProvider config={chatConfig}>
            <ChatPopUp
              title="DEWALT® Support"
              stream={false}
              customCssClasses={{
                buttonIcon: "text-white",
                button: "chatHeaderAndBotResponseColors",
                panelCssClasses: {
                  messageBubbleCssClasses: {
                    text: "text-base",
                    text__user: "chatHeaderAndBotResponseColors",
                    bubble__user: "chatHeaderAndBotResponseColors",
                  },

                  inputCssClasses: {
                    sendButton: "chatHeaderAndBotResponseColors",
                    textArea: "chatTextboxColor",
                  },
                },
                headerCssClasses: {
                  container: "chatHeaderAndBotResponseColors",
                  title: "overflow-hidden",
                },
              }}
            />
          </ChatHeadlessProvider>
        )}
      {/* <Footer _site={_site}></Footer> */}
    </div>
  );
};

export default PageLayout;
