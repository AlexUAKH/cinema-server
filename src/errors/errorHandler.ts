import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorHandler {
  static errorThrow(status: HttpStatus, error: string) {
    throw new HttpException(
      {
        status,
        error
      },
      status
    );
  }

  static notFound(message: string) {
    ErrorHandler.errorThrow(HttpStatus.NOT_FOUND, message);
  }

  static badRequest(message: string) {
    ErrorHandler.errorThrow(HttpStatus.BAD_REQUEST, message);
  }
}
