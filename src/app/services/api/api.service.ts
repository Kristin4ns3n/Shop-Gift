import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

/* Items */
  items: any[] = [
    {
      id: '1',
      name: 'Surprise Gift Basket',
      price: 999,
      status: true,
      rating: 4.9,
      cover: 'assets/img_showcase/gift-basket.jpg',
      description: 'Unbox joy and excitement with our carefully curated Surprise Gift Basket, filled with delightful surprises.'  
    },    

    {
      id: '2',
      name: 'Luxury Chocolate Box',
      price: 999,
      status: true,
      rating: 4.9,
      cover: 'assets/img_showcase/chocolate-box.jpg',
      description: 'ndulge in the rich and decadent flavors of our Luxury Chocolate Box, a perfect treat for any occasion.'  
    },  
    
    {
      id: '3',
      name: 'OTT Subscription',
      price: 1500,
      status: true,
      rating: 4.9,
      cover: 'assets/img_showcase/gift-card.jpg',
      description: 'Immerse yourself in a world of entertainment with our exclusive OTT Subscription gift.'  
    },    

    {
      id: '4',
      name: 'Designer Handbag',
      price: 10000,
      status: true,
      rating: 4.8,
      cover: 'assets/img_showcase/handbag.jpg',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'  
    },  

    {
      id: '5',
      name: 'Personalizes Mug',
      price: 350,
      status: true,
      rating: 4.5,
      cover: 'assets/img_showcase/mug.jpg',
      description: 'Start your day with a touch of personalization using our delightful Personalized Mug.'  
    },    

    {
      id: '6',
      name: 'Perfume Set',
      price: 2000,
      status: true,
      rating: 4.9,
      cover: 'assets/img_showcase/perfume-set.jpg',
      description: 'Discover the essence of luxury with our Perfume Set, a captivating blend of enchanting fragrances.'  
    },  
    
    {
      id: '7',
      name: 'Jewelry Box',
      price: 4000,
      status: true,
      rating: 4.6,
      cover: 'assets/img_showcase/jewelry-box.jpg',
      description: 'Store your precious jewels in style with our exquisitely designed Jewelry Box, a symbol of elegance.'  
    },    

    {
      id: '8',
      name: 'Romantic Dinner Set',
      price: 10000,
      status: true,
      rating: 4.9,
      cover: 'assets/img_showcase/dinner-set.jpg',
      description: 'Create magical moments with our Romantic Dinner Set, perfect for a candlelit evening with your loved one.'  
    },  

    {
      id: '9',
      name: 'Leather Wallet',
      price: 2500,
      status: true,
      rating: 4.6,
      cover: 'assets/img_showcase/wallet.jpg',
      description: 'Upgrade your accessory collection with our stylish and durable Leather Wallet, a blend of functionality and fashion.'  
    },    

    {
      id: '10',
      name: 'Phone Case',
      price: 999,
      status: true,
      rating: 4.7,
      cover: 'assets/img_showcase/phone-case.jpg',
      description: 'Protect your device in style with our trendy Phone Case, personalized for the modern individual.'  
    },  
    
    {
      id: '11',
      name: 'Diamond Jewerly',
      price: 20000,
      status: true,
      rating: 4.6,
      cover: 'assets/img_showcase/diamond.jpg',
      description: 'Adorn yourself with elegance and grace with our exquisite Diamond Jewelry collection.'  
    },    

    {
      id: '12',
      name: 'Leather Travel Set',
      price: 5000,
      status: true,
      rating: 4.5,
      cover: 'assets/img_showcase/travel-bag.jpg',
      description: 'Adorn yourself with elegance and grace with our exquisite Diamond Jewelry collection.'  
    },  
    
    {
      id: '13',
      name: 'Modern Wall Clock',
      price: 2500,
      status: true,
      rating: 4.7,
      cover: 'assets/img_showcase/wall-clock.jpg',
      description: 'Enhance your living space with our Modern Wall Clock, a blend of functionality and contemporary design.'  
    },
    
    {
      id: '14',
      name: 'Eco-friendly Planters',
      price: 850,
      status: true,
      rating: 4.5,
      cover: 'assets/img_showcase/planters.jpg',
      description: 'Bring nature indoors with our Eco-friendly Planters, '  
      }
    ]

  constructor() { }
}
