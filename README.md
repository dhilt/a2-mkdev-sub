#	  Mkdev подписка с нуля, front-end

<hr/>

##  1. Окружение

#### 1.1. Ставим npm (3+), Node (5+) и git
npm: http://blog.npmjs.org/post/85484771375/how-to-install-npm

nodejs: http://nodejs.ru/

git: https://git-scm.com/downloads

#### 1.2. Заводим аккаунт на github
https://github.com/

#### 1.3. Создаем публичный репозиторий (a2-mkdev-sub)
[здесь и далее пример с использованием моего аккаунта]

https://github.com/dhilt/a2-mkdev-sub

#### 1.4. Клонируем его в папку нашего пректа (./a2-mkdev-sub)
git clone https://github.com/dhilt/a2-mkdev-sub

cd a2-mkdev-sub

#### 1.5 Выкачиваем скелет angular2 quickstart приложения
https://github.com/angular/quickstart/archive/master.zip

#### 1.6 Распаковываем содержимое папки ./quickstart-master из архива в ./a2-mkdev-sub

#### 1.7. Изучаем описание инфраструктуры a2-quickstart приложения
https://angular.io/docs/ts/latest/quickstart.html

#### 1.8. Ставим зависимости по конфигам проекта (package.json)
npm install

#### 1.9. Запускаем nodejs сервер на 3000 порту
npm start

#### 1.10. Убеждаемся, что приложение живое
http://localhost:3000/

#### 1.11. Загружаем скелет нашего приложения на github
git add .

git commit -m "Initial commit"

git push origin master

https://github.com/dhilt/a2-mkdev-sub/commit/ef75fed5c2f13699a62e02f934c92fb289146c14

<hr/>

##  2. Задание на основе дизайна

### 2.1. Выбор услуги

#### 2.1.1. Пользователь выбирает ментора из списка доступных на данный момент по квоте

#### 2.1.1.1 Также пользователь может выбрать курс из списка доступных курсов

#### 2.1.2. При выбранном менторе пользователь может задать срок обучения

#### 2.1.3. Есть возможность задать номер купона

#### 2.2. На основании данных из 2.1 производится расчет суммы к оплате

### 2.3. Оплата услуги

#### 2.3.1. Пользователь заполняет данные по карте

#### 2.3.2. Пользователь нажимает Оплатить

### 2.4. Уведомление о результате операции по оплате услуги

### 2.5. Создание записи в истории платежа в случае успеха

<hr/>

##  3. Инфраструктура проекта. Модули, покрывающие задание (2)

### 3.1. Модуль подписки. Инфраструктура для 2.1 и 2.2

#### 3.1.1. Добавляем SubscriptionModule в качестве зависимости для AppModule
https://github.com/dhilt/a2-mkdev-sub/commit/030d6b646f24802a60a719ce53d8f1feebd09652

#### 3.1.2. Выделяем шаблон AppModule в отдельный файл с выводом будущего блока подписки
https://github.com/dhilt/a2-mkdev-sub/commit/629b6ae0e24d12908818fc28fafac2329c7844b9

#### 3.1.3. Создаем модуль Subscription и соответствующие ему компонет и шаблон в папке /subscription
https://github.com/dhilt/a2-mkdev-sub/commit/cb809c3ef7363a2a480e9755cc0a90d68dac6fc5

#### 3.1.4. Добавляем MentorsComponent и CoursesComponent в качестве зависимостей для SubscriptionModule
https://github.com/dhilt/a2-mkdev-sub/commit/4969f66ffbfbb843e4ad2730ef62970034fe8ebd

#### 3.1.5. Создаем компоненты и шаблоны для Mentors и Courses в папке /subscription/mentors_and_courses
https://github.com/dhilt/a2-mkdev-sub/commit/715baa30019fab657c31075641f9eaee27d401e0

#### 3.1.6. Выделяем блок задания срока обучения в отдельный компонент с шаблоном
https://github.com/dhilt/a2-mkdev-sub/commit/4c7fa28ede86a5fa2fc14bf16bab695ba653a049

### 3.2. Модуль оплаты. Инфраструктура для 2.3, 2.4 и 2.5

#### 3.2.1. Добавляем PaymentModule в качестве зависимости для AppModule с выводом будущего блока
https://github.com/dhilt/a2-mkdev-sub/commit/80e4367df227d88d8db1acb01ffe14f3b3ae3b90

#### 3.2.2. Создаем модуль Payment и сответствующие ему компонент и шаблон в папке /payment
https://github.com/dhilt/a2-mkdev-sub/commit/76927947250d1a96b8634654b9d79ab594263e04

#### 3.2.3. Выделяем блок с историей платежей в отдельный компонет с шаблоном в папке /payment/history
https://github.com/dhilt/a2-mkdev-sub/commit/c0deadd80170b635ed82730597393ecfae36b808

<hr/>

## 4. Первичная верстка на основе данного дизайна (https://mkdev.me/dashboard/account)

#### 4.1. Стягиваем стили "как есть"
https://github.com/dhilt/a2-mkdev-sub/commit/9dedd56e28c0daba96daaed449bf129e4f87d0b8

#### 4.2. Размещаем верстку по шаблонам проекта с минимальными изменениями
https://github.com/dhilt/a2-mkdev-sub/commit/99f671d26bff0d934aa573456bfd09063ddaabd4
https://github.com/dhilt/a2-mkdev-sub/commit/f65c4b87b72d553ff11811ce54e5d55b56186574

<hr/>

##  5. Менторы и курсы. Данные и логика

### 5.1. Массивы данных mentors и courses на компоненте Subscription

#### 5.1.1. Создаем модели Mentor и Course. При этом Mentor has many Courses
https://github.com/dhilt/a2-mkdev-sub/commit/1efce1933f08ef6bec9e877c0dec20d78b9b4f7a

#### 5.1.2. Создаем сервисы по работе с моделями. MetrorService и CourseService
https://github.com/dhilt/a2-mkdev-sub/commit/2407d689f119c1737f3eeacfda50a7ded10de555

#### 5.1.3. Добавляем массивы менторов и курсов в качестве публичных свойств компонента Subscription
https://github.com/dhilt/a2-mkdev-sub/commit/eea137fafb52ff26ac46e5eda5ddc4938c2f5fa9

#### 5.1.4. Инициализируем массивы данных 5.1.3 после того, как создается SubscriptionComponent
https://github.com/dhilt/a2-mkdev-sub/commit/3006867f03740cd0e24b6fc381c779b539932248

#### 5.1.5. Передаем данные 5.1.3 от родительского компонента в дочерние (Mentors и Courses) компоненты
https://github.com/dhilt/a2-mkdev-sub/commit/288ad8c8552bf4614d47ff9ae099c61dd39dd415

#### 5.1.6. Вводим данные 5.1.3 в шаблонах MentorsComponent и CoursesComponent
https://github.com/dhilt/a2-mkdev-sub/commit/bbd6f8e29a29ee306f95ef8ad66af590fc84621e

### 5.2. Логика выбора ментора/курса

#### 5.2.1. Добавляем логику выбора ментора в MentorsComponent
https://github.com/dhilt/a2-mkdev-sub/commit/dffefca2db648ee993cdb17ce59f5fae0cc47222

#### 5.2.2. Добавляем логику выбора ментора в MentorService и учим MentorsComponent вызывать ее
https://github.com/dhilt/a2-mkdev-sub/commit/991bb3a4f220f8e463a6715761ddb0d44eb65ace

#### 5.2.3. Добавляем логику выбора курса в CoursesComponent
https://github.com/dhilt/a2-mkdev-sub/commit/aa3250aa1abb2cb49bcf974ac86cdcf955d5f7bf

#### 5.2.4. Проводим выбранного ментора в родительский компонент Subscription ч-з событие
https://github.com/dhilt/a2-mkdev-sub/commit/12d4c29cf41af4697e685c1c231c17d14c1e9900

#### 5.2.5. Учим CoursesComponent понимать и отображать курсы выбранного ментора
https://github.com/dhilt/a2-mkdev-sub/commit/4b3138333af3d5db1d1024467b476228c8901188

https://github.com/dhilt/a2-mkdev-sub/commit/e64e06043aaf39f547a47207d06d97ab69f2cc33

#### 5.2.6. Сбрасываем выбранный курс, если он не входит в список курсов выбранного ментора
https://github.com/dhilt/a2-mkdev-sub/commit/d8c60c0f7dbce5a59a51ee86e33013ec30bb9317

#### 5.2.7. Проводим выбранный курс в родительский компонент Subscription ч-з событие
https://github.com/dhilt/a2-mkdev-sub/commit/2411652af5ed12cdf30bcec2114f3fb2508ae504

#### 5.2.8. Учим MentorsComponent понимать и отображать менторов выбранного курса
https://github.com/dhilt/a2-mkdev-sub/commit/075b7927f8b0c33c6ae3744321a3da58164137a9

#### 5.2.9. Сбрасываем выбранного ментора, если в список его курсов не входит выбранный курс
https://github.com/dhilt/a2-mkdev-sub/commit/4f54a0a8ce13afaf14d83c01fde8443a709230be

#### 5.2.10. Рефакторинг. Учет краевых случаев
https://github.com/dhilt/a2-mkdev-sub/commit/aa70575f31b2665cfa9376c4e1c026b1458855b2

<hr/>

##  6. Длительность обучения и купон

Временно пропускаем...

<hr/>

##  7. Формирование цены и подготовка платежа

### 7.1. Формирование цены и распространение по компонентам

#### 7.1.1. Формируем цену внутри SubscriptionComponent
https://github.com/dhilt/a2-mkdev-sub/commit/44d4e8dfcde1c991e968fc6cb520dce84c6c0f29

#### 7.1.2. Выводим цену (Subscription) только, если она задана (т.е. выбран ментор)
https://github.com/dhilt/a2-mkdev-sub/commit/5dd2c50ea560c80af1a65920ef863074327ac239

#### 7.1.3. Проводим цену от SubscriptionComponent вверх до AppComponent
https://github.com/dhilt/a2-mkdev-sub/commit/9ba45b6df17f68256e92ca9db8a16f9772b4ae8c

https://github.com/dhilt/a2-mkdev-sub/commit/3d764868dfcdd7efeb80b9159cf7067aaccb2153

#### 7.1.4. Проводим цену вниз от AppComponent вниз до PaymentComponent
https://github.com/dhilt/a2-mkdev-sub/commit/a8247fde7d0c73bdc16bffd88c23f753ea1205c6

#### 7.1.5. Выводим кнопку оплаты и цену на ней (Payment) только, если она задана
https://github.com/dhilt/a2-mkdev-sub/commit/f545ff3abee95f89dedb31bd9b84142f52a3659c

### 7.2. Подготовка платежа

#### 7.2.1. Задаем переменные платежной формы PaymentComponent, добавляем их в шаблон
https://github.com/dhilt/a2-mkdev-sub/commit/90479c85e6acf1fdf1deac33086ea70bb0323e19

#### 7.2.2. Добавляем в проект внешнюю зависимость от angular2-text-mask (директива MaskedInput)
https://github.com/dhilt/a2-mkdev-sub/commit/94b1623ab6cc9b6e558ca5c1c244adfe1b6a5944

#### 7.2.3. Добавляем маски на поля платежной формы, удовлетворяющие смыслу полей
https://github.com/dhilt/a2-mkdev-sub/commit/a156dc038d8dedb3d67ca99a0bae894433186196

#### 7.2.4. Размещаем модель Card и инкапсулируем переменные 7.2.1 (PaymentComponent.cardTemp)
https://github.com/dhilt/a2-mkdev-sub/commit/749c8741b8f90744005a01697d8a4b61f573cfca

#### 7.2.5. Формируем конечный набор платежных параметров (PaymentComponent.card) на основе данных 7.2.4
https://github.com/dhilt/a2-mkdev-sub/commit/8e4f3d3f57fe3b59af3f1bd35075cd4298f97bbb

#### 7.2.6. Даем возможность нажимать на кнопку Pay, только если сформированы данные 7.2.5
https://github.com/dhilt/a2-mkdev-sub/commit/8e4f3d3f57fe3b59af3f1bd35075cd4298f97bbb

https://github.com/dhilt/a2-mkdev-sub/commit/051b7235484e3143803c88e91d8e4c0716f72958

<hr/>

##  8. Платеж, обработка результата и вывод истории платежей

Временно пропускаем...

<hr/>
