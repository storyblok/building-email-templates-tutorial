import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import {
  Section
} from "@react-email/components";

const StoryblokSection = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <Section className={`bg-${blok.background_color} `}>
        {blok?.columns?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </Section>
  </main>
);

export default StoryblokSection;
