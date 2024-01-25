const convertData = (data, dType) => {
  
  const converted = data[dType].map((item) => {
    return {
      date: item[0],
      [dType]: item[1],
    };
  });
  return converted;
};

// const convertDate = (apidate) => {
//   const date = new Date(apidate);
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDay();
//   const fullDate = `${data}+${year}+${month}`;
//   return fullDate;
// };
export { convertData };
