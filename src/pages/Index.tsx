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

      {/* Box Sizes */}
      <section className="py-16 px-4">
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

      {/* Categories */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Категории товаров</h2>
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