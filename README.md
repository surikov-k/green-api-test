# Тестовое задание на должность "Разработчик NodeJS"

1. Требуется разработать механизм асинхронной обработки HTTP запросов
2. Требуется использовать стек NodeJS, RabbitMQ
3. Требуется оформить в виде репозитория на Github
4. Требуется приложить инструкцию по локальному развертыванию проекта
5. Требуется реализовать логирование для целей отладки и мониторинга
6. Требуется разработать микросервис М1 для обработки входящих HTTP запросов 
7. Требуется разработать микросервис М2 для обработки заданий из RabbitMQ

---

* [Константин Суриков](https://t.me/k_surikov)

---

## Памятка

``` bash
 cp environment/.m1.env.example environment/.m1.env
 cp environment/.m2.env.example environment/.m2.env
 cp environment/.rabbitmq.env.example environment/.rabbitmq.env
```

``` bash
npm install
```

``` bash
docker compose up -d
```


```bash
nx run-many --target=serve --projects=m1,m2
```

---
