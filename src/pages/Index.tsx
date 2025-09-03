import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const projects = [
    {
      id: 1,
      title: "Жилой комплекс «Европа»",
      description: "Полная реконструкция 15-этажного здания с современными технологиями",
      beforeImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      category: "Жилые здания"
    },
    {
      id: 2,
      title: "Торговый центр «Галактика»",
      description: "Модернизация торгового центра с новой архитектурной концепцией",
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      category: "Коммерческие"
    },
    {
      id: 3,
      title: "Офисный комплекс «Инновация»",
      description: "Строительство современного бизнес-центра класса А",
      beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      category: "Офисные здания"
    }
  ];

  const services = [
    { icon: "Building", title: "Проектирование", description: "Создание архитектурных и инженерных проектов" },
    { icon: "Hammer", title: "Строительство", description: "Полный цикл строительных работ" },
    { icon: "Wrench", title: "Реконструкция", description: "Модернизация существующих зданий" },
    { icon: "Shield", title: "Надзор", description: "Технический надзор за качеством работ" }
  ];

  const workProcess = [
    { step: 1, title: "Консультация", description: "Обсуждение проекта и требований" },
    { step: 2, title: "Проектирование", description: "Создание технического проекта" },
    { step: 3, title: "Строительство", description: "Реализация проекта в срок" },
    { step: 4, title: "Сдача объекта", description: "Контроль качества и передача" }
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      position: "Директор «СтройИнвест»",
      text: "Превосходное качество работ и соблюдение всех сроков. Рекомендую!",
      rating: 5
    },
    {
      name: "Мария Иванова", 
      position: "Управляющая ТЦ",
      text: "Профессиональная команда, которая воплотила все наши идеи в реальность.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-navy-700">СтройМастер</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#portfolio" className="text-gray-600 hover:text-orange-500 transition-colors">Портфолио</a>
              <a href="#services" className="text-gray-600 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#process" className="text-gray-600 hover:text-orange-500 transition-colors">Процесс</a>
              <a href="#reviews" className="text-gray-600 hover:text-orange-500 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-orange-500 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Обсудить проект
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-navy-700 text-white py-20 animate-gradient-shift bg-[length:400%_400%]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Строим будущее
            <span className="block text-yellow-300">вместе с вами</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            Профессиональное строительство и реконструкция объектов любой сложности. 
            От проектирования до сдачи под ключ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-white text-navy-700 hover:bg-gray-100">
              <Icon name="Eye" className="mr-2 h-5 w-5" />
              Посмотреть работы
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-700">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-navy-700 mb-4">Наши проекты</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Посмотрите, как мы преображаем пространства и создаем архитектурные шедевры
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.beforeImage} 
                        alt="До" 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-500">До</Badge>
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.afterImage} 
                        alt="После" 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-green-500">После</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-orange-500 border-orange-500">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-navy-700 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-navy-700 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр строительных услуг от проектирования до финальной отделки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={service.icon as any} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-navy-700 mb-4">Процесс работы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Четкий план действий от идеи до реализации проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  {index < workProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-orange-200 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-navy-700 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-navy-700 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-700">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-navy-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Мы всегда на связи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" className="h-6 w-6 text-orange-500" />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" className="h-6 w-6 text-orange-500" />
                  <span className="text-lg">info@stroymaster.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" className="h-6 w-6 text-orange-500" />
                  <span className="text-lg">Москва, ул. Строительная, 15</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" className="h-6 w-6 text-orange-500" />
                  <span className="text-lg">Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>

            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-700 mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Опишите ваш проект" 
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                    Отправить заявку
                    <Icon name="Send" className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">СтройМастер</span>
              </div>
              <p className="text-gray-300">
                Профессиональное строительство и реконструкция объектов с 2010 года.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Проектирование</li>
                <li>Строительство</li>
                <li>Реконструкция</li>
                <li>Технический надзор</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-300">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-orange-500">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-orange-500">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-orange-500">
                  <Icon name="Youtube" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <div className="text-center text-gray-300">
            <p>&copy; 2024 СтройМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}