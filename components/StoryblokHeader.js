import { storyblokEditable } from "@storyblok/react/rsc";
import { Section, Text} from "@react-email/components";

const StoryblokHeader = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <Section className={`h-${blok.header_height} bg-${blok.background}`}>
        <Text className={`text-${blok.title_size} text-center text-${blok.title_color}`}>
            {blok.title}
        </Text>
    </Section>
  </main>
);

export default StoryblokHeader;