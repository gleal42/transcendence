import {
SubscribeMessage,
WebSocketGateway,
OnGatewayInit,
WebSocketServer,
OnGatewayConnection,
OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';
import { AppService } from 'src/app.service';
import { Messages } from 'src/db_interactions_modules/messages/messages.entity';


@WebSocketGateway({
  cors: {
    origin: '*',
  },
 })
 export class AppGateway
 implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
 constructor(private appService: AppService) {}
 
 @WebSocketServer() server: Server;
 
 @SubscribeMessage('sendMessage')
 async handleSendMessage(client: Socket, payload: Messages): Promise<void> {
  console.log(new Date(),payload)
   await this.appService.createMessage(payload);
   this.server.emit('recMessage', payload);
 }
 
 afterInit(server: Server) {
   
 }
 
 handleDisconnect(client: Socket) {
   console.log(`Disconnected: ${client.id}`);
 }
 
 handleConnection(client: Socket, ...args: any[]) {
   console.log(`Connected ${client.id}`);
 }
}