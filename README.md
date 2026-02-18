# timepage
A start page showing time zones

## Local Testing

Since this is a static HTML page, you can test it locally in several ways:

### Option 1: Open directly in browser
Simply open `public/index.html` in your web browser:
```bash
# macOS
open public/index.html

# Linux
xdg-open public/index.html

# Windows
start public/index.html
```

### Option 2: Use Python's built-in server
```bash
cd public
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Option 3: Use Node's http-server (requires installation)
```bash
npx http-server public -p 8000
```
Then open http://localhost:8000 in your browser.

### Option 4: Use PHP's built-in server
```bash
cd public
php -S localhost:8000
```
Then open http://localhost:8000 in your browser.
