# Code Base FE CSR

Codebase FE using React+Vite. Using a routing based on file/folder names.

## Installation

- Clone repository
- Run `npm install`
- Run `npm run dev`
- Open `localhost:3000` in browser

## Development

- Run `npm run dev`
- Open `localhost:3000` in browser
- Recommend use Vs Code for code editor, then setup extension prettier & extentension for tailwindcss (`https://tailwindcss.com/docs/editor-setup#intelli-sense-for-vs-code`)

## Testing

- Run `npm run test`
- Run `npm run test:cover`
- See other command in package.jsom
- Open file from directory `./coverage/index.html` in browser

## Production Build

- Run `npm run build`
- Run `npm run preview`
- Open `localhost:8080` in browser

## Rule & Folder Structure

- Structure for components/\*\*
  - ComponentName/\*
    - ComponentName.tsx
    - index.{ts,tsx}
    - style.module.css (optional)
    - constant.ts (for local constant, optional)
    - type.d.ts (optional)
- Structure for unit test
  - `__tests__/`
    - index.test.{ts, tsx}
- Use PascalCase:
  - name of file component,
  - name of function component
- use camelCase
  - name of variable, function, file in folder services & utils
- use upper SNAKE_CASE
  - name of constanta
- use useHookName
  - name of custom hook or file custom hook
- Use english for name of variable, function, route, file, folder, constanta, etc.

## Commit

- Use conventional commit for commit message. See [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
- use english for commit message

## Team Work Flow

<div>
  <img width="100%" src="https://firebasestorage.googleapis.com/v0/b/test-40865.appspot.com/o/teamwork%20flow.png?alt=media&token=7c637ad8-66a3-4a81-88c2-6c8dcbc17ff7"/>
</div>

## Reference

- [Generouted](https://github.com/oedotme/generouted)
- [TailwindCSS](https://tailwindcss.com/)
