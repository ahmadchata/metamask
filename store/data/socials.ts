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
    image: "/img/message.png",
    alt: "message logo",
  },
  {
    id: 2,
    width: 19.5,
    height: 19.5,
    image: "/img/facebook.png",
    alt: "Facebook logo",
  },
  {
    id: 3,
    width: 19.5,
    height: 19.5,
    image: "/img/twitter.png",
    alt: "Twitter logo",
  },
  {
    id: 4,
    width: 19.5,
    height: 19.5,
    image: "/img/reddit.png",
    alt: "Reddit logo",
  },
];
