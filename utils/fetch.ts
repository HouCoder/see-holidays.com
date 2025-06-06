export const fetchWithTimeout = async (
  url: string,
  options = {},
  timeoutMs = 2000,
) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    // merge your passed options with the abort signal
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err: unknown) {
    clearTimeout(id);

    if (err instanceof Error && err.name === 'AbortError') {
      throw new Error(`Fetch to ${url} timed out after ${timeoutMs}ms`);
    }

    throw err;
  }
};
