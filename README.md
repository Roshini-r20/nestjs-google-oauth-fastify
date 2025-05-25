

# Google OAuth Fastify (NestJS)

This project is a NestJS application that demonstrates Google OAuth2 authentication using Passport.js, running on the Fastify platform.

---

## 🚀 Features

- ✅ Google OAuth2 login with Passport.js
- ⚡ Fastify HTTP server integration for performance
- 🔐 Environment-based configuration using `@nestjs/config` and `.env` file
- 🧱 Modular and scalable structure for authentication logic

---

## 📁 Project Structure


```markdown
src/
├── app.module.ts
├── main.ts
├── auth/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   └── google/
│       ├── google.strategy.ts
│       └── google.guard.ts

````

---

## 🛠️ Setup

### 1. Install dependencies

```bash
npm install
````

---

### 2. Configure environment variables

Create a `.env` file in the root of your project and add your Google OAuth credentials:

```env
# .env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
API_SERVICE_URL = http://localhost:3000
```

---

### 3. Run the application

```bash
npm run start
```

---

### 4. Test Google OAuth

Open your browser and visit:

```
http://localhost:3000/auth/google
```

You'll be redirected to Google's login screen. On success, you'll land on `/auth/google/redirect` with user data.

---

## 🧠 Notes

* Make sure your Google Cloud Console project includes the proper **OAuth consent screen** and **Redirect URI**.
* This example doesn't persist users in a database—feel free to extend the `AuthService` to store users or generate JWTs.

---