import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { Column } from "@react-email/components";

const StoryblokColumn = ({ blok }) => (
  <Column className="px-4 w-1/2" {...storyblokEditable(blok)}>
    {blok?.body?.map((nestedBlok) => (
      <StoryblokComponent className="" blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </Column>
);

export default StoryblokColumn;
