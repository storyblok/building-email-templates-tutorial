import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import {
  Text
} from "@react-email/components";

const StoryblokText = ({ blok }) => (
  <main  {...storyblokEditable(blok)}>
    <Text className={`text-${blok.color} ${blok.style} px-4`}>{blok.content}</Text>
  </main>
);

export default StoryblokText;
