import Layout from "@/components/ui/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Catalog = () => {
  const categories = [
    {
      id: 'electronics',
      title: 'Электроника',
      description: 'Гаджеты, которые взорвут твой мозг',
      icon: 'Smartphone',
      gradient: 'from-purple-600 to-blue-600',
      items: 189,
      slogan: 'ТЕХНОЛОГИИ БУДУЩЕГО УЖЕ ЗДЕСЬ!'
    },
    {
      id: 'clothes',
      title: 'Одежда',
      description: 'Стиль, который сводит с ума',
      icon: 'Shirt',
      gradient: 'from-pink-600 to-rose-600',
      items: 243,
      slogan: 'ОДЕВАЙСЯ КАК ЗВЕЗДА!'
    },
    {
      id: 'auto',
      title: 'Автомобиль',
      description: 'Апргейд твоей машины до космоса',
      icon: 'Car',
      gradient: 'from-blue-600 to-cyan-600',
      items: 156,
      slogan: 'ТВОЯ ТАЧКА = ТВОЯ ГОРДОСТЬ!'
    },
    {
      id: 'sweets',
      title: 'Сладости',
      description: 'Сладкий рай в каждом укусе',
      icon: 'Cookie',
      gradient: 'from-orange-600 to-yellow-600',
      items: 127,
      slogan: 'СЛАДКАЯ ЖИЗНЬ НАЧИНАЕТСЯ ЗДЕСЬ!'
    },
    {
      id: 'birthday',
      title: 'День рождения',
      description: 'Подарки, от которых плачут от счастья',
      icon: 'Gift',
      gradient: 'from-green-600 to-emerald-600',
      items: 98,
      slogan: 'ПРЕВРАЩАЕМ ДЕНЬ В ПРАЗДНИК!'
    },
    {
      id: 'newyear',
      title: 'Новый год',
      description: 'Новогодняя магия в каждом боксе',
      icon: 'Snowflake',
      gradient: 'from-red-600 to-pink-600',
      items: 76,
      slogan: 'ЧУДЕСА СЛУЧАЮТСЯ 31 ДЕКАБРЯ!'
    },
    {
      id: 'school',
      title: 'Для школы',
      description: 'Учеба станет крутым приключением',
      icon: 'GraduationCap',
      gradient: 'from-yellow-600 to-orange-600',
      items: 154,
      slogan: 'ЗНАНИЯ + СТИЛЬ = УСПЕХ!'
    },
    {
      id: 'home',
      title: 'Для дома',
      description: 'Дом твоей мечты начинается с нас',
      icon: 'Home',
      gradient: 'from-teal-600 to-cyan-600',
      items: 201,
      slogan: 'ДОМ = ТВОЯ КРЕПОСТЬ КОМФОРТА!'
    },
    {
      id: 'diy',
      title: 'Сделай сам',
      description: 'Создавай шедевры своими руками',
      icon: 'Wrench',
      gradient: 'from-gray-600 to-slate-600',
      items: 87,
      slogan: 'ТВОИ РУКИ = ТВОЯ СИЛА!'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30"></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
            КАТАЛОГ МАГИИ
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-secondary mb-4 animate-scale-in">
            🔥 ВЫБЕРИ СВОЮ СУДЬБУ! 🔥
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            9 категорий невероятных товаров ждут тебя! Каждый бокс — это билет в мир приключений и открытий. 
            Не просто покупка, а настоящее путешествие в неизвестное!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="text-xl px-10 py-4">
              <Icon name="Zap" size={24} className="mr-2" />
              ШОКИРУЙ МЕНЯ!
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-10 py-4">
              <Icon name="Shuffle" size={24} className="mr-2" />
              СЛУЧАЙНЫЙ ВЫБОР
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={category.id} 
                className="group hover:scale-105 transition-all duration-500 cursor-pointer animate-fade-in relative overflow-hidden h-[400px]" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-6 group-hover:animate-float mx-auto shadow-2xl`}>
                    <Icon name={category.icon as any} size={48} className="text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className={`text-sm font-black text-transparent bg-gradient-to-r ${category.gradient} bg-clip-text mb-2 tracking-wider`}>
                      {category.slogan}
                    </div>
                    <CardTitle className="text-3xl font-black mb-2">{category.title}</CardTitle>
                    <CardDescription className="text-lg font-medium">{category.description}</CardDescription>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {category.items} товаров
                    </Badge>
                    <Badge className={`bg-gradient-to-r ${category.gradient} text-white border-0 text-lg px-4 py-2`}>
                      ХИТ
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 mt-auto">
                  <Button 
                    className={`w-full text-lg py-4 bg-gradient-to-r ${category.gradient} hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold`}
                    asChild
                  >
                    <Link to={`/${category.id}`}>
                      <Icon name="Rocket" size={20} className="mr-2" />
                      ПОГНАЛИ!
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-primary text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in">
            НЕ МОЖЕШЬ ВЫБРАТЬ?
          </h2>
          <p className="text-2xl font-bold text-white/90 mb-8 animate-scale-in">
            🎯 МЫ ВЫБЕРЕМ ЗА ТЕБЯ ИДЕАЛЬНЫЙ БОКС! 🎯
          </p>
          <Button size="lg" variant="outline" className="text-xl px-12 py-4 bg-white text-primary hover:bg-gray-100 font-bold animate-scale-in" style={{animationDelay: '0.3s'}}>
            <Icon name="Sparkles" size={24} className="mr-2" />
            СОЗДАТЬ ПЕРСОНАЛЬНЫЙ БОКС
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;