"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const PORT = process.env.PORT || 5550;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    await app.listen(PORT);
    console.log(`🚀 Server graphql ready at http://localhost:${PORT}/graphql`);
    console.log(`🚀 Server rest ready at http://localhost:${PORT}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map