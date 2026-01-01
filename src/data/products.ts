export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  amazonLink: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Microsoft Surface Laptop 4',
    description: 'I\'ve been using this laptop since college and it\'s been a great experience. It\'s lightweight and has a great battery life. Great for development and every day needs.',
    imageUrl: '/images/products/ryzen5.webp',
    amazonLink: 'https://www.amazon.com/Microsoft-Surface-15-inch-Touchscreen-Windows/dp/B08SBT6GC5',
    category: 'Computer and accessories',
    featured: true,
  },
  {
    id: '2',
    title: 'Sony WH-1000XM4 Headphones (Midnight Blue)',
    description: 'These are the best headphones I\'ve ever used, they\'re comfortable and sound great. Noise cancelling is a game changer.',
    imageUrl: '/images/products/coolermaster.webp',
    amazonLink: 'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-l',
    category: 'Computer and accessories',
    featured: false,
  },
  {
    id: '3',
    title: 'Trezor Wallet',
    description: 'This is the best wallet for Bitcoin, it\'s secure and easy to use. I\'ve been using it for over a year and it\'s never failed me.',
    imageUrl: '/images/products/MotherBoard.webp',
    amazonLink: 'https://trezor.io/trezor-safe-3-bitcoin-only',
    category: 'Computer and accessories',
    featured: true,
  },
  {
    id: '4',
    title: 'Nearstream USB&XLR Podcast Microphone',
    description: 'This is the best microphone for content creation or podcasting. It\'s easy to use and has a great sound quality.',
    imageUrl: '/images/products/Ram.webp',
    amazonLink: 'https://www.nearstream.us/usb-xlr-condenser-microphone-am25x',
    category: 'Computer and accessories',
    featured: false,
  },
];