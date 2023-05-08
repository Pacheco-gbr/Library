import bcrypt from "bcrypt";
import "dotenv/config";

export interface CryptoPassword {
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
}

export class BCryptPassword implements CryptoPassword {
    private _salt = process.env.BCRYPT_SALT;

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 8);
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}
