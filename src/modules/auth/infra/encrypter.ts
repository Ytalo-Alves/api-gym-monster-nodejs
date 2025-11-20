export interface Encrypter {
  encrypt(payload: { sub: string; role: string }): Promise<string>;
}
