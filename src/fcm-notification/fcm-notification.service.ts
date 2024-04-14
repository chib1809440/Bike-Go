import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'bikego-vercel',
    clientEmail:
      'firebase-adminsdk-fmtu8@bikego-vercel.iam.gserviceaccount.com',
    privateKey:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCso9uLjOf8Qqqu\n1ByrsGV/11z4NCwFsvvXl4/cVC9UVJad6zkla0Cp+1hCpSO02/1SptSKmUZZEoXm\nxV/+TiZctnJkzNf3GXIe+E2UEE73l5BY7Fal2bMqnrF2vz7cdvhysRCvJVMnhFnI\nVj+lkYLRJiLkOxp+HAGv7z5qUu8BnPqMFZ3Foz5ml6qcK/gcmQALi0BzLtRulDkN\nBDp1n1klYKDE/tWXc5sHXgsxdpFkyzo/FSWqNeazBN1kvBs4m4JbTmkwzaV7I2jm\nMfJRpAidNqy9N4mpoS9VDWOJ0iC2J6mGZVq77DKubt7jniq6egaxQOuL4LxStTmO\nXMSw0UcHAgMBAAECggEAO65pt1R+3jYty0KIptHURN2uxh9DGLVHWsCKeyCfPAgC\nCZXHq6foMtsxJ9ju/xcN/ASwdTmHmENPBvg0tzVNDcAEy9QE1Od3DD3Kk+UPZ4h9\n3j/VtIAN8C3sK6DxmkWGnh+YJPRCSub2IsuuNQ6YqrUEWuITxoToEGokqZ0CAwww\nL9Z8Ikz1kcvLRy6S3yq2jm6wG2NvQJjYm+nbRDWKmloCgd2jzgE+sN0Kk2CRnjPo\n8GvRdJPry6E4gnc4Fvyc2ZJn9TImI4I3Eb2nQgISGHTcd9/rVCIQP0bXc8LT9bsD\noQqej6T5qUdmPEzb29Y/7afefCH0xbxbKM/B9jsoAQKBgQDWWnsXB9ZTXST4kF4O\nxzKyzDtCwO8bMk4MkLuPFY2amQ47ygEkE/EGPci6jvSQRvFx7i9IwctHxHMIaLm9\nj2VSOCzePcqg/P8D+NDgtBN3zrg+pbYDsA4GO+raJl8rSbeZ0gjAxuej5ozssJoT\nJhmHMs1Qy4HRLYNdVgeZn4op2QKBgQDOLqK1GvxgkKoM80lHMIupKqSeH/LyrnFH\nXps1s8QyzEUNKaImLE/Q941pZf9qtmA1045Wwaqd2iyK0YbEMJIq0wyNwYqp2kBM\nHTxEPaPdKYit8qpYjPLuJSr1M2xc64ud2c4kgf6q0rfTyNtSa1BGUeOOxiaurJgt\nhIDMQ+6L3wKBgAETeTS3ZFsMx6e7yc0XMOj234FJSKoBSaUEgPyJ5ikVhZ3FONY+\nh2I5oy1UlGO5B3ND99bMqkGU+eLb67rI4oBUKd1/v+mo+3rAoAPQw5xBXGlsGYrR\nMnDTki1ALhAgkZxjEootNXJ8MM7rYAqikVQ9bAxwyRkMunEYgndB9saZAoGAQPWg\nfb7K1QG/EeV0qOE6n0m4I7mdKaicOAgujnTc08RX3RXI6I39d7EG9LYWCuD63vqQ\nVfUedC1Q60uoUhebdbKYufDIZ0tEBrcPTdC91+hGD8fss4l04GMFbcuN0JjFnC4L\nLKVoPxm0oR0fPJBi8kTKlSkI9u+Z4n1ktvaQKbECgYA1QksRkmJLxS9CZ8lEWi4f\noU0Kox84qJ7bWT/KApmaXFxyyXYXa+QG/Ohr7sNfWzczkVj1XWlu0DRDo1qLOR2j\nxKhaYjanFYs5X9CYhudZb7g5qskyuuf6Gxe78TAipQEPB5rHaakbJ4nttKYAQjt2\nXk39rmFiI2bkI+gysksKCw==\n-----END PRIVATE KEY-----\n',
  }),
});

@Injectable()
export class FcmNotificationService {
  async sendingNotificationOneUser(token: string) {
    const payload = {
      token: token,
      notification: {
        title: 'Hi there this is title',
        body: 'Hi there this is message',
      },
      data: {
        name: 'Joe',
        age: '21',
      },
    };
    return admin
      .messaging()
      .send(payload)
      .then((res) => {
        return {
          success: true,
        };
      })
      .catch((error) => {
        console.log('error: ', error);
        return {
          success: false,
        };
      });
  }
}
