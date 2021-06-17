import IConfig from '../server/interfaces/config.interface';

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

export const config: IConfig = {
    PORT,
    ENV,
}