import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigationItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/catalog", label: "Каталог", icon: "Package" },
    { path: "/electronics", label: "Электроника", icon: "Smartphone" },
    { path: "/clothes", label: "Одежда", icon: "Shirt" },
    { path: "/auto", label: "Автомобиль", icon: "Car" },
    { path: "/sweets", label: "Сладости", icon: "Cookie" },
    { path: "/cart", label: "Корзина", icon: "ShoppingCart" },
    { path: "/profile", label: "Профиль", icon: "User" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
              <span className="text-xl font-bold">MYSTERY BOXES</span>
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.slice(0, 6).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/cart">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Корзина
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/profile">
                  <Icon name="User" size={16} className="mr-2" />
                  Войти
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden mt-4">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {navigationItems.slice(0, 6).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <Icon name={item.icon as any} size={14} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded"></div>
                <span className="font-bold">MYSTERY BOXES</span>
              </Link>
              <p className="text-muted-foreground">
                Создаем уникальные боксы-сюрпризы для каждого
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Категории</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/electronics" className="hover:text-foreground">Электроника</Link></li>
                <li><Link to="/clothes" className="hover:text-foreground">Одежда</Link></li>
                <li><Link to="/auto" className="hover:text-foreground">Автомобиль</Link></li>
                <li><Link to="/sweets" className="hover:text-foreground">Сладости</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/help" className="hover:text-foreground">Помощь</Link></li>
                <li><Link to="/delivery" className="hover:text-foreground">Доставка</Link></li>
                <li><Link to="/returns" className="hover:text-foreground">Возврат</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">Контакты</Link></li>
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

export default Layout;