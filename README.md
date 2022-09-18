# MongoDB File Server（基于 MongoDB 的文件服务器）

MongoDB File Server is a file server system based on MongoDB. MongoDB File Server is committed to the storage of small files, such as pictures in the blog, ordinary documents and so on.

It's using some very popular technology like:

* MongoDB 3.6.4
* Spring Boot 2.0.3.RELEASE
* Spring Data MongoDB 2.0.8.RELEASE
* Spring 5.0.7.RELEASE
* Thymeleaf 3.0.9.RELEASE
* Thymeleaf Layout Dialect 2.2.0
* Embedded MongoDB 2.0.2
* Gradle 4.5.1

## Features 特性

* Easy to use.（易于使用）
* RESTful API.
* Chinese characters friendly.
* ...

## APIs

Here are useful APIs.

* GET  /files/{pageIndex}/{pageSize} : Paging query file list.
* GET  /files/{id} : Download file.
* GET  /view/{id} : View file online.
* POST /upload : Upload file.
* DELETE /{id} : Delete file.


## How to 

It's so easy to start up the MongoDB File Server with 2 steps.

### 1. Get source

```shell
$ git clone https://github.com/waylau/mongodb-file-server.git
```

### 2. Run

```shell
$ gradlew bootRun
```

then, you can visit the application at <http://localhost:8081>.

## Configuration


The default configuration is （默认配置如下） :

```
server.address=localhost
server.port=8081

# Thymeleaf 
spring.thymeleaf.encoding=UTF-8
spring.thymeleaf.cache=false
spring.thymeleaf.mode=HTML5

# limit upload file size
spring.servlet.multipart.max-file-size=1024KB
spring.servlet.multipart.max-request-size=1024KB
```

`spring.http.multipart.max-file-size` and `spring.http.multipart.max-request-size` limit upload file never larger than 1MB.

NOTE: default configuration will use a embedded Mongo, that means data will never persist when the MongoDB File Server restart.

You can set `spring.data.mongodb.uri` property to configure additional settings such as the replica set.（支持配置独立运行的 MongoDB 的连接方式）:

```shell
spring.data.mongodb.uri=mongodb://user:secret@mongo1.example.com:12345,mongo2.example.com:23456/test
```

If you want to use a stanlne MongoDB server, comment out Embedded MongoDB dependencies in `build.gradle` file.（如果需要使用独立运行的 MongoDB，就把下面的依赖注释掉）:

```
dependencies {
	...
	// compile('de.flapdoodle.embed:de.flapdoodle.embed.mongo')
	...
}
```

## Detail （详细设计说明）

See detail <https://waylau.com/mogodb-file-server-with-spring-boot>.

## Host（托管）

* GitHub：<https://github.com/waylau/mongodb-file-server>
* 码云：<https://gitee.com/waylau/mongodb-file-server>

## Contact 联系作者

* Blog: [waylau.com](https://waylau.com)
* Gmail: [waylau521(at)gmail.com](mailto:waylau521@gmail.com)
* Weibo: [waylau521](http://weibo.com/waylau521)
* Twitter: [waylau521](https://twitter.com/waylau521)
* Github : [waylau](https://github.com/waylau)

## Donate 捐赠

Support me!

感谢您对老卫[开源工作](https://github.com/waylau)的支持!

![开源捐赠](https://waylau.com/images/showmethemoney-sm.jpg)

捐赠所得所有款项将用于开源事业！