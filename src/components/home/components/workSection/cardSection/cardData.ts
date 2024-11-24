import { Images } from "@/assets/Images";
import { StaticImageData } from "next/image";
interface ICardData {
  image: StaticImageData;
  heading: string;
  subHeading: string;
  description: string;
}
export const CardData: ICardData[] = [
  {
    image: Images.card1Image,
    heading: "Ecommerce",
    subHeading: "2023 - Product design",
    description:
      "Transformed an e-commerce website with a modern redesign, optimizing the shopping journey and elevating brand identity. Resulted in improved user engagement, increased sales, and a seamless shopping experience.",
  },
  {
    image: Images.card2Image,
    heading: "Tour Booking App",
    subHeading: "2023 - Product design",
    description:
      "Designed a user-friendly travel booking app that enables users to effortlessly plan and book their dream vacations. The app offers a seamless experience for browsing destinations, selecting packages, and managing reservations, making travel planning a breeze.",
  },
  {
    image: Images.card3Image,
    heading: "Online Streaming App",
    subHeading: "2023 - Product design",
    description:
      "Developed an intuitive online streaming app that brings entertainment to users' fingertips. The app offers a vast library of content, smooth playback, and personalized recommendations, enhancing the user's streaming experience.",
  },
];
