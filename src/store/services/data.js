export const articleData = [
  {
    id: 1,
    title: 'Hello world',
    date: 1568620630, // UNIX timestamp
    text: `
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
<img src="https://via.placeholder.com/150" alt="Image" />
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
`
  }
];
export const commentsData = [
  {
    id: 1,
    commentText: '<p>Hello World</p>',
    name: 'Bob',
    likes: 5,
    replies: [
      {
        id: 10,
        commentText: '<p>Can you write smth better?</p>',
        name: 'Emily',
        // likes: 10,
        replies: [
          {
            id: 13,
            commentText: '<p>Can you write smth better 2?</p>',
            name: 'Emily',
            likes: 10,
            replies: [
              {
                id: 15,
                commentText: '<p>Can you write smth better3 ?</p>',
                name: 'Emily',
                likes: 10,
                replies: []
              },
              {
                id: 16,
                commentText: '<p>Can you write smth better3 ?</p>',
                name: 'Emily',
                likes: 10,
                replies: []
              },
              {
                id: 17,
                commentText: '<p>Can you write smth better4 ?</p>',
                name: 'Emily',
                likes: 10,
                replies: []
              }
            ]
          }
        ]
      },
      {
        id: 11,
        commentText: '<p>Where does it come from?</p>',
        name: 'Emily',
        likes: 0,
        replies: [
          {
            id: 12,
            commentText: '<p>Where can I get some?</p>',
            name: 'Carl',
            likes: 1,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    commentText: '<p>Hello <strong>World</strong>! How are you today?</p>',
    name: 'John Random',
    likes: 3,
    replies: [
      {
        id: 55,
        commentText: "<p>I'm fine</p>",
        name: 'Matt',
        replies: []
      }
    ]
  },
  {
    id: 3,
    likes: 1,
    commentText: '<p>Lerem Ipsum.... <i>Hi</i></p>',
    name: 'Bob',
    replies: []
  }
];
