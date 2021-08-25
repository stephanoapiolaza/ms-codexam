"use strict";

const {today} = require('../helper/date.helper');

/**
 * Allow to upload code to retrieve the output
 *
 * @param {*} req
 * @param {*} res
 */
exports.doReassess = async (req, res) => {
  try {
      return res.status(200).json({
        "type": "web",
        "sdtout": [
          {
            "type": "iframe",
            "data": "terminal ...."
          }
        ]
      });
  } catch (e) {
    return res.status(500).json({
      "data": null,
      "notifications": [
        {
          "message": e.toString(),
          "timestamp": today(),
        }
      ]
    });
  }
};