import Layout from "@/components/ui/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Electronics = () => {
  const products = [
    {
      id: 1,
      name: 'Gaming Мышь RGB Pro',
      price: '2,990₽',
      originalPrice: '4,500₽',
      image: '/placeholder.svg',
      rating: 4.9,
      description: 'Профессиональная игровая мышь с RGB подсветкой',
      features: ['12000 DPI', 'RGB подсветка', 'Программируемые кнопки']
    },
    {
      id: 2,
      name: 'Беспроводные наушники',
      price: '5,990₽',
      originalPrice: '8,900₽',
      image: '/placeholder.svg',
      rating: 4.8,
      description: 'TWS наушники с активным шумоподавлением',
      features: ['ANC технология', '30 часов работы', 'Быстрая зарядка']
    },
    {
      id: 3,
      name: 'Механическая клавиатура',
      price: '7,990₽',
      originalPrice: '12,000₽',
      image: '/placeholder.svg',
      rating: 4.7,
      description: 'Механическая клавиатура с синими переключателями',
      features: ['Cherry MX Blue', 'RGB подсветка', 'Алюминиевый корпус']
    },
    {
      id: 4,
      name: 'Смарт-часы Fitness',
      price: '8,990₽',
      originalPrice: '13,500₽',
      image: '/placeholder.svg',
      rating: 4.6,
      description: 'Умные часы с мониторингом здоровья',
      features: ['GPS трекер', 'Пульсометр', '7 дней работы']
    },
    {
      id: 5,
      name: 'Power Bank 20000mAh',
      price: '3,490₽',
      originalPrice: '5,200₽',
      image: '/placeholder.svg',
      rating: 4.8,
      description: 'Мощный внешний аккумулятор с быстрой зарядкой',
      features: ['20000mAh', 'Быстрая зарядка', '3 USB порта']
    },
    {
      id: 6,
      name: 'Bluetooth колонка',
      price: '4,490₽',
      originalPrice: '6,800₽',
      image: '/placeholder.svg',
      rating: 4.9,
      description: 'Портативная колонка с мощным звуком',
      features: ['360° звук', 'Водозащита', '24 часа работы']
    }
  ];

  const boxes = [
    {
      id: 'gamer-starter',
      name: 'Геймер Starter',
      price: '4,990₽',
      originalPrice: '7,500₽',
      items: 4,
      description: 'Идеальный набор для начинающего геймера'
    },
    {
      id: 'tech-master',
      name: 'Tech Master',
      price: '9,990₽',
      originalPrice: '15,000₽',
      items: 6,
      description: 'Продвинутые гаджеты для технологических гуру'
    },
    {
      id: 'mobile-king',
      name: 'Mobile King',
      price: '6,990₽',
      originalPrice: '10,500₽',
      items: 5,
      description: 'Все для твоего смартфона и мобильной жизни'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center animate-float">
              <Icon name="Smartphone" size={64} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 text-white animate-fade-in">
            ЭЛЕКТРОНИКА
          </h1>
          
          <div className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-6 animate-scale-in">
            ⚡ ТЕХНОЛОГИИ БУДУЩЕГО УЖЕ ЗДЕСЬ! ⚡
          </div>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            Гаджеты, которые изменят твою жизнь навсегда! Каждый товар — это портал в мир высоких технологий. 
            Будь на волне инноваций!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="text-xl px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Icon name="Zap" size={24} className="mr-2" />
              ВЗОРВИ МОЙ РАЗУМ!
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-4 border-purple-400 text-purple-100 hover:bg-purple-800">
              <Icon name="Package" size={24} className="mr-2" />
              ГОТОВЫЕ БОКСЫ
            </Button>
          </div>
        </div>
      </section>

      {/* Mystery Boxes */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              🎁 ГОТОВЫЕ БОКСЫ-СЮРПРИЗЫ
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Экономь время — мы уже собрали лучшие комбинации!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {boxes.map((box, index) => (
              <Card key={box.id} className="group hover:scale-105 transition-all duration-500 animate-fade-in relative overflow-hidden" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-5 group-hover:opacity-15 transition-opacity"></div>
                
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:animate-float">
                    <Icon name="Package" size={40} className="text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{box.name}</CardTitle>
                  <CardDescription className="text-lg">{box.description}</CardDescription>
                  
                  <div className="flex items-center justify-center space-x-2 mt-4">
                    <span className="text-3xl font-black text-purple-600">{box.price}</span>
                    <span className="text-lg text-gray-500 line-through">{box.originalPrice}</span>
                  </div>
                  
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    {box.items} товаров внутри
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <Button className="w-full text-lg py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    ХОЧУ ЭТОТ БОКС!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              🔥 ТОП ЭЛЕКТРОНИКИ
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Собери свой персональный бокс из этих хитов!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="group hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Smartphone" size={64} className="text-purple-600" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center text-yellow-500">
                      <Icon name="Star" size={16} className="mr-1 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <CardDescription>{product.description}</CardDescription>
                  
                  <div className="space-y-1 mt-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить в бокс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-center">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-white mb-6 animate-fade-in">
            ГОТОВ СТАТЬ TECH-ГУРУ?
          </h2>
          <p className="text-2xl font-bold text-white/90 mb-8 animate-scale-in">
            🚀 СОЗДАЙ СВОЙ ПЕРСОНАЛЬНЫЙ TECH-БОКС ПРЯМО СЕЙЧАС! 🚀
          </p>
          <Button size="lg" variant="outline" className="text-xl px-12 py-4 bg-white text-purple-600 hover:bg-gray-100 font-black animate-scale-in" style={{animationDelay: '0.3s'}}>
            <Icon name="Rocket" size={24} className="mr-2" />
            СОЗДАТЬ МОЙ БОКС!
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Electronics;