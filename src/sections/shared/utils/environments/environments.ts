interface Environments {
  apiUrl: string;
  apiKey: string;
}

const environments: Environments = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY!,
  apiUrl: process.env.NEXT_PUBLIC_APIURL!,
};

export default environments;
