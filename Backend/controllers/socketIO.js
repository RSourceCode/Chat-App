

export const ConnectSocketIO = (io) => {
    return io.on('connection', (socket) => {
        console.log('a user connected');
        


        socket.on('join room', (user) => {
            console.log('You joined room');
            user?.chats.map((chat) =>{
              console.log(chat);
                socket.join(`${chat}`)
            })
        });

        socket.on('send message', (msg, chat_id) => {
            console.log('message: ' + msg, chat_id);
            io.to(`${chat_id}`).emit('receive message', msg, chat_id);
        });



























        socket.on('added to group', (msg) => {
            console.log('added to group: ' + msg);
          });
        socket.on('added to chat', (msg) => {
            console.log('added to chat: ' + msg);
          });
        socket.on('group chat message', (msg) => {
            console.log('group chat message: ' + msg);
          });
        socket.on('deleted message', (msg) => {
            console.log('deleted message: ' + msg);
          });
        socket.on('message edited', (msg) => {
            console.log('message edited : ' + msg);
          });
        socket.on('typing', (msg) => {
            console.log('typing: ' + msg);
          });
        socket.on('stopped typing', (msg) => {
            console.log('stopped typing: ' + msg);
          });
        socket.on('came online', (msg) => {
            console.log('came online: ' + msg);
          });
        socket.on('went offline', (msg) => {
            console.log('went offline: ' + msg);
          });
        socket.on('profile edited', (msg) => {
            console.log('profile edited: ' + msg);
          });
          
        socket.on('cleared chat', (msg) => {
            console.log('cleared chat: ' + msg);
          });
          

        socket.on('disconnect', () => {
            socket.on('leave room', (user) => {
                console.log('You left room');
                user?.chats.map((chat) =>{
                    socket.leave(`${chat?._id}`)
                })
            });
            console.log('user disconnected');
        });
    })
}