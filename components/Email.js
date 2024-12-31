import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { Body, Container, Tailwind, Section, Head } from "@react-email/components";

const Email = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <Tailwind>
    <Head>
      <title>My email title</title>
    </Head>

      <Body className={blok.theme}>
        <div className={`w-full my-auto mx-auto`}>
          {blok?.full_screen_content?.map((nestedBlok) => (
            <StoryblokComponent className="w-full" blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>

        <Section className="w-2/3">
          {blok?.body?.map((nestedBlok) => (
            <StoryblokComponent className="w-full" blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </Section>
      </Body>
    </Tailwind>
  </main>
);

export default Email;
