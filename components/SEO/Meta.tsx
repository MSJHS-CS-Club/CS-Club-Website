import { DefaultSeo } from "next-seo";

export const title = "MSJCS Club";
export const description = "We are the CS Club at Mission San Jose High!";
export const url = "https://msjcs.vercel.app";

export const keywords =
  "msjcs club,msjcs,msj,mission san jose high,mission san jose high school,mission cs club, mission cs,computer science club msj,coding club msj,coding club mission san jose high,coding club mission san jose high school,msj ai,msj computer,msjcs website";

export const Meta = ({}: {
  title?: string;
  description?: string;
  url?: string;
}) => (
  <DefaultSeo
    title={title}
    description={description}
    openGraph={{
      url,
      title,
      description,
      images: [
        {
          url: `${url}/logo.png`,
          width: 1200,
          height: 1200,
          alt: "MSJCS",
        },
      ],
      site_name: "MSJCS Club",
    }}
  />
);
