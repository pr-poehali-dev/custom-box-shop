import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Index = () => {
  const salesData = [
    { name: 'Янв', sales: 4000, boxes: 240 },
    { name: 'Фев', sales: 3000, boxes: 180 },
    { name: 'Мар', sales: 5000, boxes: 300 },
    { name: 'Апр', sales: 4500, boxes: 270 },
    { name: 'Май', sales: 6000, boxes: 360 },
    { name: 'Июн', sales: 5500, boxes: 330 },
  ];

  const categoryData = [
    { name: 'Электроника', value: 35, color: '#8B5CF6' },
    { name: 'Одежда', value: 25, color: '#F59E0B' },
    { name: 'Автомобиль', value: 15, color: '#10B981' },
    { name: 'Сладости', value: 25, color: '#EF4444' },
  ];

  const categories = [
    {
      id: 'auto',
      title: 'Автомобиль',
      description: 'Аксессуары и инструменты для авто',
      icon: 'Car',
      gradient: 'from-blue-500 to-cyan-400',
      items: 156
    },
    {
      id: 'clothes',
      title: 'Одежда',
      description: 'Стильные вещи и аксессуары',
      icon: 'Shirt',
      gradient: 'from-pink-500 to-rose-400',
      items: 243
    },
    {
      id: 'electronics',
      title: 'Электроника',
      description: 'Гаджеты и устройства',
      icon: 'Smartphone',
      gradient: 'from-purple-500 to-indigo-400',
      items: 189
    },
    {
      id: 'sweets',
      title: 'Сладости',
      description: 'Конфеты и деликатесы',
      icon: 'Cookie',
      gradient: 'from-orange-500 to-yellow-400',
      items: 127
    },
    {
      id: 'birthday',
      title: 'День рождения',
      description: 'Подарки для праздника',
      icon: 'Gift',
      gradient: 'from-green-500 to-emerald-400',
      items: 98
    },
    {
      id: 'newyear',
      title: 'Новый год',
      description: 'Новогодние сюрпризы',
      icon: 'Snowflake',
      gradient: 'from-red-500 to-pink-400',
      items: 76
    },
    {
      id: 'school',
      title: 'Для школы',
      description: 'Школьные принадлежности',
      icon: 'GraduationCap',
      gradient: 'from-yellow-500 to-orange-400',
      items: 154
    },
    {
      id: 'home',
      title: 'Для дома',
      description: 'Товары для уюта',
      icon: 'Home',
      gradient: 'from-teal-500 to-cyan-400',
      items: 201
    },
    {
      id: 'diy',
      title: 'Сделай сам',
      description: 'Инструменты и материалы',
      icon: 'Wrench',
      gradient: 'from-gray-500 to-slate-400',
      items: 87
    }
  ];

  const boxSizes = [
    { size: 'S', price: '1,990₽', description: '3-5 товаров' },
    { size: 'M', price: '3,990₽', description: '6-8 товаров' },
    { size: 'L', price: '6,990₽', description: '9-12 товаров' },
    { size: 'XL', price: '9,990₽', description: '13-15 товаров' }
  ];

  const popularBoxes = [
    {
      id: 'gamer-pro',
      title: 'Геймер Pro',
      category: 'Электороника',
      price: '5,990₽',
      originalPrice: '8,500₽',
      description: 'Лучшие игровые аксессуары и гаджеты',
      items: ['Механическая клавиатура', 'Gaming мышь', 'Наушники', 'LED-подсветка', 'Игровые стикеры'],
      rating: 4.9,
      orders: 1247,
      badge: 'ХИТ',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      id: 'fashion-trend',
      title: 'Fashion Trend',
      category: 'Одежда',
      price: '4,490₽',
      originalPrice: '6,200₽',
      description: 'Стильные аксессуары и модные вещи',
      items: ['Дизайнерская футболка', 'Стильная кепка', 'Аксессуары', 'Модные носки', 'Брелок'],
      rating: 4.8,
      orders: 923,
      badge: 'ТРЕНД',
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      id: 'sweet-dreams',
      title: 'Sweet Dreams',
      category: 'Сладости',
      price: '2,990₽',
      originalPrice: '4,100₽',
      description: 'Изысканные сладости со всего мира',
      items: ['Швейцарский шоколад', 'Японские KitKat', 'Итальянские конфеты', 'Французские макаруны', 'Редкие леденцы'],
      rating: 4.7,
      orders: 756,
      badge: 'НОВИНКА',
      gradient: 'from-orange-600 to-yellow-600'
    }
  ];

  const preferences = [
    { id: 'budget', label: 'Бюджет', options: ['До 2000₽', '2000-5000₽', '5000-10000₽', 'Свыше 10000₽'] },
    { id: 'age', label: 'Возраст', options: ['До 18', '18-25', '25-35', '35-50', '50+'] },
    { id: 'interests', label: 'Интересы', options: ['Технологии', 'Спорт', 'Творчество', 'Путешествия', 'Кулинария', 'Мода'] },
    { id: 'occasion', label: 'Повод', options: ['День рождения', 'Новый год', 'Без повода', 'Подарок другу', 'Для себя'] }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
            <span className="text-xl font-bold">MYSTERY BOXES</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#analytics" className="hover:text-primary transition-colors">Аналитика</a>
            <Button variant="outline" size="sm">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
            <Button size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="mb-8 flex justify-center">
            <img 
              src="/img/bce9c1fa-f53d-4dff-8b03-0a29cca89fa2.jpg" 
              alt="Mystery Box" 
              className="w-64 h-64 object-contain animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MYSTERY BOXES
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создай свой уникальный бокс-сюрприз из любимой категории товаров. 
            Выбери размер, наполнение и получи незабываемые эмоции!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Package" size={20} className="mr-2" />
              Создать бокс
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Boxes */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🔥 Самые популярные боксы</h2>
            <p className="text-muted-foreground text-lg">Готовые наборы, которые выбирают тысячи клиентов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularBoxes.map((box, index) => (
              <Card key={box.id} className="group hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in relative overflow-hidden" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`absolute top-4 right-4 z-10`}>
                  <Badge className={`bg-gradient-to-r ${box.gradient} text-white border-0`}>
                    {box.badge}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${box.gradient} flex items-center justify-center mb-4 group-hover:animate-float mx-auto`}>
                    <Icon name="Package" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center">{box.title}</CardTitle>
                  <CardDescription className="text-center">{box.description}</CardDescription>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <div className="flex items-center text-yellow-500">
                      <Icon name="Star" size={16} className="mr-1 fill-current" />
                      <span className="text-sm font-medium">{box.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">•</span>
                    <span className="text-muted-foreground text-sm">{box.orders} заказов</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">Что внутри:</p>
                    <ul className="space-y-1">
                      {box.items.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-sm flex items-center">
                          <Icon name="Check" size={14} className="mr-2 text-green-500" />
                          {item}
                        </li>
                      ))}
                      {box.items.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          + еще {box.items.length - 3} товара
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">{box.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{box.originalPrice}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Экономия {parseInt(box.originalPrice.replace(/[^\d]/g, '')) - parseInt(box.price.replace(/[^\d]/g, ''))}₽
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎯 Персонализация под тебя</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Расскажи о своих предпочтениях, и мы подберем идеальный бокс специально для тебя
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {preferences.map((pref, index) => (
                  <div key={pref.id} className="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                      <Icon name="Settings" size={20} className="mr-2 text-primary" />
                      {pref.label}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {pref.options.map((option, idx) => (
                        <Button 
                          key={idx}
                          variant="outline" 
                          className="justify-start hover:bg-primary hover:text-primary-foreground transition-colors"
                          size="sm"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8">
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Найти мой идеальный бокс
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    <Icon name="Shuffle" size={20} className="mr-2" />
                    Удиви меня
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Box Sizes */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Выбери размер бокса</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {boxSizes.map((box, index) => (
              <Card key={box.size} className="text-center hover:scale-105 transition-all duration-300 group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:animate-float">
                    <span className="text-2xl font-bold text-primary-foreground">{box.size}</span>
                  </div>
                  <CardTitle className="text-2xl">{box.price}</CardTitle>
                  <CardDescription>{box.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Box Constructor */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🛠️ Конструктор персонального бокса</h2>
            <p className="text-muted-foreground text-lg">Собери бокс мечты по своему вкусу</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Step 1: Choose Category */}
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                    Выбери категорию
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.slice(0, 4).map((category) => (
                    <Button 
                      key={category.id}
                      variant="outline" 
                      className="w-full justify-start hover:bg-primary hover:text-primary-foreground"
                      size="sm"
                    >
                      <Icon name={category.icon as any} size={16} className="mr-2" />
                      {category.title}
                    </Button>
                  ))}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-muted-foreground"
                    size="sm"
                  >
                    <Icon name="Plus" size={16} className="mr-2" />
                    Показать все категории
                  </Button>
                </CardContent>
              </Card>

              {/* Step 2: Set Preferences */}
              <Card className="animate-scale-in" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                    Настрой предпочтения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ценовой диапазон</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="hover:bg-secondary">До 3k₽</Button>
                      <Button variant="outline" size="sm" className="hover:bg-secondary">3k-7k₽</Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Стиль</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="hover:bg-secondary">Классика</Button>
                      <Button variant="outline" size="sm" className="hover:bg-secondary">Тренды</Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Количество товаров</label>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Minus" size={14} />
                      </Button>
                      <span className="px-4 py-2 bg-muted rounded text-sm font-medium">5 товаров</span>
                      <Button variant="outline" size="sm">
                        <Icon name="Plus" size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3: Preview & Order */}
              <Card className="animate-scale-in" style={{animationDelay: '0.4s'}}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                    Твой бокс готов!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-xl mx-auto mb-3 flex items-center justify-center animate-float">
                      <Icon name="Package" size={32} className="text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">Персональный Mystery Box</h3>
                    <p className="text-sm text-muted-foreground mb-2">Электроника • 5 товаров</p>
                    <div className="text-2xl font-bold text-primary">4,990₽</div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать бокс
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Предпросмотр содержимого
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Все категории товаров</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={category.id} className="group hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:animate-float`}>
                    <Icon name={category.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Badge variant="secondary">{category.items} товаров</Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full group-hover:bg-primary">
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Выбрать товары
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section id="analytics" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Аналитика продаж</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Sales Chart */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2 text-primary" />
                  Продажи по месяцам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#8B5CF6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="PieChart" size={20} className="mr-2 text-primary" />
                  Популярные категории
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">2,847</div>
                <div className="text-sm text-muted-foreground">Всего боксов продано</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-secondary mb-2">₽28,490</div>
                <div className="text-sm text-muted-foreground">Средний чек</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-500 mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{animationDelay: '0.7s'}}>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-500 mb-2">1,331</div>
                <div className="text-sm text-muted-foreground">Уникальных товаров</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Готов создать свой mystery box?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Присоединяйся к тысячам довольных клиентов и получи свой уникальный бокс-сюрприз уже сегодня!
          </p>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-primary hover:bg-gray-100">
            <Icon name="Sparkles" size={20} className="mr-2" />
            Начать прямо сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded"></div>
                <span className="font-bold">MYSTERY BOXES</span>
              </div>
              <p className="text-muted-foreground">
                Создаем уникальные боксы-сюрпризы для каждого
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Категории</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Автомобиль</li>
                <li>Одежда</li>
                <li>Электроника</li>
                <li>Сладости</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Помощь</li>
                <li>Доставка</li>
                <li>Возврат</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Следи за нами</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Mystery Boxes. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;