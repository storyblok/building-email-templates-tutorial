import "./globals.css";
import { storyblokInit, apiPlugin} from "@storyblok/react/rsc"
import StoryblokProvider from "@/components/StoryblokProvider"


export const metadata = {
  title: "Storyblok React Email App"
};

storyblokInit({
  accessToken: 'your-access-token',
  use: [apiPlugin]
})

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html>
      <body>
        {children}
      </body>
    </html>
    </StoryblokProvider>
  );
}
