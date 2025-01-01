import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';




@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://nikhilpulluri7810:1234@nikhilpulluri.g6f9o.mongodb.net/Planorama?retryWrites=true&w=majority&appName=NikhilPulluri'),
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    TasksModule
  ],

})
export class AppModule {}
