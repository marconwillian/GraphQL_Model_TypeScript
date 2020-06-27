import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Teste {
  @Field(_ => String)
  public name?: string;

  @Field(_ => String)
  public id?: string;
}