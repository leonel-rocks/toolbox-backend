const formatFileResponse = (fileName, response) => {
  return {
    file: fileName,
    lines: response.data
      .split("\n")
      .slice(1)
      .reduce((acc, line) => {
        const values = line.split(",");
        const [file, text, number, hex] = values;

        if (values.length === 4) {
          acc.push({
            file,
            text,
            number,
            hex,
          });
        }

        return acc;
      }, []),
  };
};

module.exports = { formatFileResponse };
