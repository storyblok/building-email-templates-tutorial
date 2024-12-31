import { storyblokEditable } from "@storyblok/react/rsc";
import {
  Img
} from "@react-email/components";

const StoryblokImage = ({ blok }) => (
  <main {...storyblokEditable(blok)}>

    <Img src={blok.content.filename} className={`${blok.width}`} />
    </main>
);

export default StoryblokImage;
