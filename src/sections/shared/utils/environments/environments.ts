interface Environments {
  apiUrl: string;
  apiKey: string;
  imageUrl: string;
}

const environments: Environments = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY!,
  apiUrl: process.env.NEXT_PUBLIC_APIURL!,
  imageUrl: process.env.NEXT_PUBLIC_BASEIMAGE_URL!,
};

export default environments;
