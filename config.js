{

  "host": "0.0.0.0",
  "port": 8080,

  "keyLength": 10,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
    "type": "redis",
    "host": "redis",
    "port": 6379,
    "db": 2,
    "password": "sYACwB3PfDK3lI3B",
    "expire": 2592000
  },

  "documents": {
    "about": "./about.md"
  }

}
