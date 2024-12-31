/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Email from "./Email";
import StoryblokHeader from "./StoryblokHeader";
import StoryblokRow from "./StoryblokRow";
import StoryblokColumn from "./StoryblokColumn";
import StoryblokText from "./StoryblokText";
import StoryblokButton from "./StoryblokButton";
import StoryblokSection from "./StoryblokSection";


import StoryblokImage from "./StoryblokImage";
import {
  Hr
 } from "@react-email/components";
/** 2. Import your components */


/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "9xsAP4BXt2gIDYUAuiDDdgtt",
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
});

export default function StoryblokProvider({ children }) {
  return children;
}