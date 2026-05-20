# Dynamic Website Starter

A simple dynamic website built with Node.js, Express, and EJS.

## What is included

- `server.js`: Express server with routes for `/, /about, /contact`, and `/api/team`
- `views/`: EJS templates for rendering pages dynamically
- `public/`: static assets like CSS
- `package.json`: dependencies and startup scripts

## Run locally

1. Open a terminal and go to the project folder:
   ```bash
   cd ~/dynamic-website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open the website in your browser:
   ```
   http://localhost:3000
   ```

## Development mode

Use this command if you want the server to restart automatically when files change:

```bash
npm run dev
```

## Deploying to hosting

### Option 1: Render.com

1. Create a Render account and connect your GitHub repository.
2. Create a new Web Service.
3. Set the build command to:
   ```bash
   npm install
   ```
4. Set the start command to:
   ```bash
   npm start
   ```
5. Deploy the project.

### Option 2: Railway.app

1. Create a Railway account.
2. Import the repository.
3. Railway detects Node.js automatically.
4. Deploy and open the created URL.

### Option 3: Fly.io

1. Install the Fly CLI.
2. Run `fly launch` and follow the prompts.
3. Deploy with `fly deploy`.

## Customize the site

- Edit `views/index.ejs`, `views/about.ejs`, and `views/contact.ejs`
- Update colors in `public/css/styles.css`
- Change the team data directly in `server.js`

## Notes

- This site is dynamic because the pages are rendered on the server based on data and requests.
- The `/api/team` endpoint returns JSON data you can use from JavaScript or mobile apps.
