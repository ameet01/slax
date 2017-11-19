
    {
      entities: {
        users: {
          1: {
            id: 1,
            username: 'user1',
          }
          2: {
            id: 2,
            username: 'user2',
          },
          3: {
            id: 3,
            username: 'user3',
          }
        },
        channels: {
          1: {
            id: 1,
            name: 'channel1',
            description: 'description1',
          },
          2: {
            id: 2,
            name: 'channel2',
            description: 'description2',
          },
          3: {
            id: 3,
            name: 'channel3',
            description: 'description3',
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

      ui: {
        loading: true,
      }

      errors: {
        session: ['Invalid credentials']
      }

    }
