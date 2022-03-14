import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly tel: number;

  @ApiProperty()
  readonly date: Date;

  @ApiProperty()
  readonly avatar: string;
}

export class EditClientDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly tel: number;

  @ApiProperty()
  readonly date: Date;

  @ApiProperty()
  readonly avatar: string;
}

export class FilterDto {
  @ApiProperty()
   name: string;

  @ApiProperty()
   lastName: string;

  @ApiProperty()
   email: string;

  @ApiProperty()
   tel: number;

  @ApiProperty()
   date: Date;
}
