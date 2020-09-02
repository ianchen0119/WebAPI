# WebAPI
A practice on Deno, I planning to use `oak`, `denon`, `mongoDB`... to build my first webAPI of Deno.

## Steps

### Install Denon

```
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```

### Create denon.json that be used to customize Denon’s configuration.

```
{
  "$schema": "https://deno.land/x/denon/schema.json",
  "env": {},
  "scripts": {
    "start": {
      "cmd": "deno run app.ts"
    }
  }
}
```

## Reference

[Deno: Create a Rest API using JWT](https://levelup.gitconnected.com/deno-create-a-rest-api-using-jwt-5141fd5b1066)