import chat1x from "../assets/icons/icon-chat.png";
import chat2x from "../assets/icons/icon-chat@2x.png";
import chat3x from "../assets/icons/icon-chat@3x.png";

import money1x from "../assets/icons/icon-money.png";
import money2x from "../assets/icons/icon-money@2x.png";
import money3x from "../assets/icons/icon-money@3x.png";

import security1x from "../assets/icons/icon-security.png";
import security2x from "../assets/icons/icon-security@2x.png";
import security3x from "../assets/icons/icon-security@3x.png";

const features = [
  {
    id: 1,
    src: chat1x,
    srcSet: `${chat1x} 1x, ${chat2x} 2x, ${chat3x} 3x`,
    width: 100,
    height: 100,
    alt: "Chat Icon",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    id: 2,
    src: money1x,
    srcSet: `${money1x} 1x, ${money2x} 2x, ${money3x} 3x`,
    width: 100,
    height: 100,
    alt: "Money Icon",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    id: 3,
    src: security1x,
    srcSet: `${security1x} 1x, ${security2x} 2x, ${security3x} 3x`,
    width: 100,
    height: 100,
    alt: "Security Icon",
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export default features;
