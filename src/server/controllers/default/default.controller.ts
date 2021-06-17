import { Response } from "express";

export function response(res: Response, data: Object) {
  res.json({
    ok: true,
    ...data,
  });
}

