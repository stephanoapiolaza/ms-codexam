import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import today from '../helper/date.helper';

/**
 * Allow to upload code to retrieve the output
 *
 * @param {*} req
 * @param {*} res
 */
const doReassess = async (req: Request, res: Response) => {
  try {
    return res.status(StatusCodes.OK).json({
      type: 'web',
      sdtout: [
        {
          type: 'iframe',
          data: 'https://stephanoapiolaza.cl',
        },
      ],
    });
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      notifications: [
        {
          message: e.toString(),
          timestamp: today(),
        },
      ],
    });
  }
};

export default doReassess;
