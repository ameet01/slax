{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'user1',
        picture_url: ""
      },
      2: {
        id: 2,
        username: 'user2',
        picture_url: ""
      },
      3: {
        id: 3,
        username: 'user3',
        picture_url: ""
      }
    },
    channels: {
      1: {
        id: 1,
        name: 'channel1'
      },
      2: { //Current Channel
        id: 2,
        name: 'channel2',
        description: 'description2',
        user_ids: [1,3],
        message_ids: [4,5,5,6,7],
        image_url: ""
      },
      3: {
        id: 3,
        name: 'channel3'
      }
    },
    messages: {
      1: {
        id: 1,
        body: 'hi',
        user_id: 1,
        channel_id: 1,
      },
      2: {
        id: 2,
        body: 'hello',
        user_id: 2,
        channel_id: 3,
      }
    }
  },

  errors: {
    session: ['Invalid credentials'],
    channelForm: ['Channel name can\'t be blank'],
    messageForm: ['Message content can\'t be blank']
  },

  ui: {
    loading: true,
    channel: 1
  },

  session: {
    currentUser: {
       id: 2,
       username: 'user2',
       image_url: ""
    }
  }

}
