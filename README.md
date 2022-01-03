# Sincovschi Website

This project was generated using [Nx](https://nx.dev).

## Prisma

### Type models:
```
npx prisma generate
```

### Heroku push migration:
```bash
npx heroku run prisma db push
```

## Heroku

### Command file
```
./Procfile
```

### Login:
```
npx heroku login
```

### Setup git:
```
npx heroku git:remote -a eugene-blog-md
```

### Heroku push:
```
git push heroku main
```
