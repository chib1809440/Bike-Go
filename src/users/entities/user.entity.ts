import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform(doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class User {
  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  fullName: string;

  @Prop()
  email: string;

  @Prop({ enum: ['male', 'female', 'other'] })
  gender: string;

  @Prop({ required: true })
  dob: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  invitationCode: string;

  @Prop()
  invited: string;

  @Prop()
  publicKey: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
