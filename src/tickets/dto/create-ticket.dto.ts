import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty({ example: 'Den', description: 'Recipients name' })
  readonly name: string;
}
