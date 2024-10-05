const handleError = async (response: Response) => {
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response;
};

const toJSON = (response: Response) => {
  return response.json();
};

export const fetcher = <T>(
  url: string,
  options?: { method: METHODS; body?: Record<string, unknown> },
): Promise<T> => {
  const opt: RequestInit = {
    ...(options?.body ? { body: JSON.stringify(options.body) } : {}),
    ...(options?.method ? { method: options.method } : {}),
  };

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    ...opt,
    headers: {
      ...defaultHeaders,
    },
  };

  return fetch(url, config).then(handleError).then(toJSON);
};

export const METHOD = {
  POST: "POST",
  PUT: "PUT",
  GET: "GET",
  DELETE: "DELETE",
} as const;

type METHODS = keyof typeof METHOD;
