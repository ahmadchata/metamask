export interface SocialsData {
  id: number;
  width: number;
  height: number;
  image: string;
  alt: string;
}

export const socialData: SocialsData[] = [
  {
    id: 1,
    width: 19.5,
    height: 19.5,
    image: "/img/socials/message.png",
    alt: "message logo",
  },
  {
    id: 2,
    width: 19.5,
    height: 19.5,
    image: "/img/socials/facebook.png",
    alt: "Facebook logo",
  },
  {
    id: 3,
    width: 19.5,
    height: 19.5,
    image: "/img/socials/twitter.png",
    alt: "Twitter logo",
  },
  {
    id: 4,
    width: 19.5,
    height: 19.5,
    image: "/img/socials/reddit.png",
    alt: "Reddit logo",
  },
];
