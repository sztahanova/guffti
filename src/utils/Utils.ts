export const getErrorMessage = (error: unknown): string | undefined => {
  if (error == null) return undefined;
  if (error instanceof Error) return error.message;
  return String(error);
};
