type fetchMethodsType = "PUT" | "GET" | "POST" | "DELETE" | "PATCH";

export interface CustomFetchResponseStructure {
  success: boolean;
  data?: null | unknown;
  error?: string;
}

interface CustomError {
  message: string;
}

interface FetchConfigStructure {
  token?: string;
  body?: Object;
  extraConfigs?: Object;
}

const customFetch = async (
  method: fetchMethodsType,
  url: string,
  configs?: FetchConfigStructure,
): Promise<CustomFetchResponseStructure> => {
  let errorMessage;
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${configs?.token || process.env.NEXT_PUBLIC_APIKEY}`,
    };

    const config = {
      method,
      headers,
      body:
        method === "GET" || method === "DELETE"
          ? undefined
          : JSON.stringify(configs?.body),
      ...configs?.extraConfigs,
    };

    const response = await fetch(url, config);

    if (response.status === 401) {
      errorMessage = "Unauthorized";
    }

    if (!response.ok) {
      return { success: false, error: response.statusText };
    }

    const data = await response.json();

    if (data.success !== undefined) {
      return { data, success: data.success };
    }

    return { data, success: true };
  } catch (error: unknown) {
    return { error: (error as CustomError).message, success: false };
  }
};

export default customFetch;
