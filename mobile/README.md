[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11362482&assignment_repo_type=AssignmentRepo)

# P3-Challenge-2

UI Library: ...

Struktur Folder:

- client-mobile
- server
  - orchestrator (port: 4000)
  - orchestrator-express (port: 4000)
  - services
    - users - mongodb (port: 4001)
    - app - postgres (port: 4002)

## W2D2

Target:

- [x] Memahami `react-native` dan `expo`
- [x] Install `expo-cli` & `expo init` & setup project mobile
- [x] Mencoba component Text, View, Image, StyleSheet, Button, ScrollView, FlatList
- [ ] Mencoba useState, useEffect dalam react-native
- [ ] Hit API server yang sudah dibuat untuk mendapatkan data
- [ ] Mengetahui bahwa redux & redux-thunk bisa diimplementasi di react-native
- [x] Memahami `react-native-navigation`
- [x] Memahami Stack Navigation & Tab Navigation
- [x] Membuat min 2 Screen (Home, Detail)

**Report:**

> Hari ini Saya mempelajari konsep baru dari react-native yang lumayan seru dan menantang. saya juga telah mengimplementasikan navigation dengan membuat page home yang berisi tab movies list dan genre list dan juga saya membuat stack untuk home dan juga detail. Pekerjaan hari ini saya fokuskan untuk explore dan mencoba library baru ini sehingga styling saya tinggalkan sedikit. dan hari ini juga saya belum mencoba fetch data karena saya masih bingung dengan bagaimana cara hit API yang sudah dibuat.

## W2D3

Target:

- [x] Memahami React Native Gesture Handler
- [x] Memahami NoSQL: Mongodb
- [x] Membuat service users dengan Mongodb (Kerjakan di `server/services/users`)
- [x] Membuat action pada users: Read, Create & Delete (Update optional)

**Report:**

> Materi hari ini sudah masuk kedalam server/backend. pada hari ini saya belajar membuat server berbasis mongoDB. menurut saya membuat server mongoDB terbilang mudah karena tidak banyak yang harus di setting seperti memakai postgres dengan sequelize. Saya sempat kesulitan mengkoneksikan mongoDB dengan server yang saya buat karena ternyata localhost pada window tidak terbaca, tidak seperti pada lecture sehingga harus saya ganti localhost dengan IP yang merujuk pada localhost saya yaitu dengan 127.0.0.1

## W2D4

Target:

- [ ] Membuat Server Baru, Microservices
- [ ] Memisahkan service user dan app
- [ ] Membuat Orchestrator-express yang bisa komunikasi ke service user dan app
- [ ] Memahami cache dalam database
- [ ] Install dataabase Redis dan menggunakan ioRedis sebagai cache
- [ ] Menjaga relasi User dengan product pada microservice

**Report:**

...

## W2D5

Target:

- [ ] Memahami GraphQL dan tahu perbedaan dengan RESTful API
- [ ] Membuat Orchestrator dengan menggunakan GraphQL
- [ ] Memahami Typedefs, Resolvers
- [ ] Mampu membuat Query dan Mutation
- [ ] Menggunakan redis pada graphql untuk kebutuhan cache server
- [ ] Memahami Apollo-Client & Implementasi pada mobile apps
- [ ] Memahami cache pada Apollo-Client

**Report:**

...

## W3D1

Target:

- [ ] Memahami Docker
- [ ] Implementasi Docker pada aplikasi server

**Report:**

...
