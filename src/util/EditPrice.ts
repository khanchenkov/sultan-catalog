export const editPrice = (fullPrice: number) => {
  if (Number.isInteger(fullPrice)) {
    return fullPrice + " ₸";
  } else {
    return (fullPrice.toFixed(2) + "").replace(".", ",") + " ₸";
  }
};
  