import { storyblokEditable } from "@storyblok/react/rsc";
import { Button } from "@react-email/components";

const StoryblokButton = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
  <Button
      href={blok.link.url}
      style={{ backgroundColor: blok.bg_color, padding: "10px 20px", color: blok.color }}
    >
      {blok.text}
    </Button>
  </main>
);

export default StoryblokButton;
