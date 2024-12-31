
import { Resend } from 'resend';

import {
  getStoryblokApi, StoryblokComponent, storyblokInit, apiPlugin
} from "@storyblok/react/rsc";

import { render } from '@react-email/components';

import Email from '@/components/Email';
import StoryblokHeader from "@/components/StoryblokHeader";
import StoryblokRow from "@/components/StoryblokRow";
import StoryblokColumn from "@/components/StoryblokColumn";
import StoryblokText from "@/components/StoryblokText";
import StoryblokImage from "@/components/StoryblokImage";
import StoryblokSection from "@/components/StoryblokSection";
import StoryblokButton from "@/components/StoryblokButton";
import { Hr } from '@react-email/components';

const resend = new Resend("re_EaXWfp5d_NXoL7m212RfkXwcXkFFWzgmo");

storyblokInit({
  accessToken: 'your-access-token',
  use: [apiPlugin],
  components: {
    email: Email,
    header: StoryblokHeader,
    row: StoryblokRow,
    column: StoryblokColumn,
    text: StoryblokText,
    line_break: Hr,
    image: StoryblokImage,
    button: StoryblokButton,
    section: StoryblokSection
  },
})


export async function POST() {

  const storyblokApi = await getStoryblokApi();

  let { data } = await storyblokApi.get(`cdn/stories/news-letter-week-1`, {version: 'draft'}, {cache: "no-store"});

  const emailTemplate =  Email({blok: data.story.content}) 
  const temp = render(emailTemplate)
  console.log(temp)
  try {
    const { d, e } = await resend.emails.send({
      from: 'Chakit <onboarding@resend.dev>',
      to: ['chakit.arora@storyblok.com'],
      subject: 'Hello world',
      react: emailTemplate,
    });
    if (e) {
      return Response.json({ e }, { status: 500 });
    }
    return Response.json({'message': 'ok'});

  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}