export const toPHP = (number) => {
  const formatter = new Intl.NumberFormat([], {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
};

export const toDate = (date) => {
  const formatter1 = Intl.DateTimeFormat([], {
    month: "long",
    day: "2-digit",
    year: "2-digit",
  });

  const formatter2 = Intl.DateTimeFormat([], {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formatter1.format(date)}`;
};
