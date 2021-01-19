const getMakes = async (q?: string): Promise<string[]> => {
  const baseUrl = "/api/makes";
  const resolvedUrl = q ? `${baseUrl}?q=${q}` : baseUrl;
  return fetch(resolvedUrl).then((res) => res.json());
};

const getModels = async (make?: string): Promise<string[]> => {
  const baseUrl = "/api/models";
  const resolvedUrl = make ? `${baseUrl}?make=${make}` : baseUrl;
  return fetch(resolvedUrl).then((res) => res.json());
};

export { getMakes, getModels };
