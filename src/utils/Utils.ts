export const getErrorMessage = (error: unknown): string | undefined => {
  if (error == null) return undefined;
  if (error instanceof Error) return error.message;
  return String(error);
};

/**
 * Random integer generator that accepts a lower and an upper limit and returns a random number between these two values (both included).
 *
 * @param minimumValue - the lower limit
 * @param maximumValue - the upper limit
 * @returns a random number between the lower and upper limit specified
 */
export const randomIntFromInterval = (minimumValue: number, maximumValue: number): number => {
  return Math.floor(Math.random() * (maximumValue - minimumValue + 1) + minimumValue);
};
