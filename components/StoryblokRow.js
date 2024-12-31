import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import {
  Row,
  Section
} from "@react-email/components";

const StoryblokRow = ({ blok }) => (
  <main {...storyblokEditable(blok)}>

    <Section className={`bg-${blok.background_color}`}>
      <Row>
        {blok?.columns?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </Row>
    </Section>
  </main>
);

export default StoryblokRow;
