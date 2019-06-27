import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { RoomsController } from './rooms.controller'

import { RoomsService } from './rooms.service'
import { RoomSchema } from './schemas/room.schema'
import { TasksListSchema } from './schemas/task-list.schema'
import { TaskSchema } from './schemas/task.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Room', schema: RoomSchema },
      { name: 'TasksList', schema: TasksListSchema },
      { name: 'Task', schema: TaskSchema }
    ])
  ],
  controllers: [RoomsController],
  providers: [RoomsService]
})
export class RoomsModule {}
