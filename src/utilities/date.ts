export const formatDate = (date: string | null, presentLabel?: string) =>
  !date ? presentLabel : `${date.slice(5, 7)}/${date.slice(0, 4)}`;
