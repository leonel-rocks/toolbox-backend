const tbxService = require("../services/tbxService");
const { app } = require("../instances");
const { formatFileResponse } = require("../utils");

/**
 * GET /files/data
 * Get CSV files
 */
exports.files = async (req, res) => {
  const fileName = req.query.fileName;
  try {
    if (fileName) {
      const files = await tbxService
        .file(fileName)
        .then((response) => {
          return formatFileResponse(fileName, response);
        })
        .catch(() => ({ file: fileName, lines: [] }));

      return res.status(200).json([files]);
    }

    const {
      data: { files: allFiles },
    } = await tbxService.files();

    const files = await Promise.all(
      allFiles.map((file) =>
        tbxService
          .file(file)
          .then((response) => {
            return formatFileResponse(file, response);
          })
          .catch(() => ({ file, lines: [] }))
      )
    );

    return res.status(200).json(files);
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
