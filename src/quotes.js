const quotes = [
  {
    quote: 'You become responsible, forever, for what you have tamed.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote:
      'But the conceited man did not hear him. Conceited people never hear anything but praise.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote:
      'Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote:
      'Where are the people?” resumed the little prince at last. “It’s a little lonely in the desert…” “It is lonely when you’re among people, too,” said the snake.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote:
      'A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote: 'When someone blushes, doesn’t that mean ‘yes’?',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote:
      'I have lived a great deal among grown-ups. I have seen them intimately, close at hand. And that hasn’t much improved my opinion of them.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote: 'Only the children know what they are looking for.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote: 'But the eyes are blind. One must look with the heart.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote:
      'And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote:
      'It is much more difficult to judge oneself than to judge others. If you succeed in judging yourself rightly, then you are indeed a man of true wisdom.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote:
      'It is the time you have wasted for your rose that makes your rose so important.',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    quote: 'I am who I am and I have the need to be.',
    author: 'Antoine de Saint-Exupéry'
  }
];

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
