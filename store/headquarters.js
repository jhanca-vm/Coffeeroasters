export const state = () => ({
  data: [
    {
      id: 1,
      img: require('~/assets/images/illustration-uk.svg'),
      country: 'United Kingdom',
      address: ['68  Asfordby Rd', 'Alcaston', 'SY6 1YA'],
      phone: '+44 1241 918425',
    },
    {
      id: 2,
      img: require('~/assets/images/illustration-canada.svg'),
      country: 'Canada',
      address: ['1528  Eglinton Avenue', 'Toronto', 'Ontario M4P 1A6'],
      phone: '+1 416 485 2997',
    },
    {
      id: 3,
      img: require('~/assets/images/illustration-australia.svg'),
      country: 'Australia',
      address: ['36 Swanston Street', 'Kewell', 'Victoria'],
      phone: '+61 4 9928 3629',
    },
  ],
})
