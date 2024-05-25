interface Environments {
  apiUrl: string;
  apiKey: string;
  imageUrl: string;
  username: string;
  password: string;
}

const environments: Environments = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY!,
  apiUrl: process.env.NEXT_PUBLIC_APIURL!,
  imageUrl: process.env.NEXT_PUBLIC_BASEIMAGE_URL!,
  username: process.env.NEXT_PUBLIC_USERNAME!,
  password: process.env.NEXT_PUBLIC_PASSWORD!,
};

export default environments;
