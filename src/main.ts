import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({}),
    {
      logger: ['error', 'warn', 'log', 'debug'],
    },
  )
  const configService = app.get(ConfigService)
  const PORT = configService.get('PORT')

  app
    .getHttpAdapter()
    .getInstance()
    .addHook('onRequest', (req: any, res: any, done: any) => {
      // Patch Fastify's response to behave more like Express
      res.setHeader = (key: string, value: string) => {
        return res.raw.setHeader(key, value)
      }
      res.end = (data?: any) => {
        res.raw.end(data)
      }
      req.res = res
      done()
    })
  await app.listen(PORT || 3000)
}
bootstrap()