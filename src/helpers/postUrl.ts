export const getPostUrlFromFile = (file) => {
  const path = file.split("/");
  const [filename] = path.splice(-1)[0].split(".");

  return `\\post\\${filename}`;
};

export const getPostSlugFromFile = (file) => {
  const path = file.split("/");
  const [filename] = path.splice(-1)[0].split(".");

  return `${filename}`;
};
