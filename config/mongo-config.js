"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async () => {
    return {
        uri: getMongoString,
    };
};
exports.getMongoConfig = getMongoConfig;
const getMongoString = 'mongodb+srv://imperiazt:MCq87RDUGnLSH7ZM@cluster0.fiqphth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//# sourceMappingURL=mongo-config.js.map