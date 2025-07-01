<div align="center">
  <div>
    <img height="50px" width="175px" src="./public/assets/orion-light.png" alt="ORYN Logo" />
    <h3><strong>"<em>OH-RYE-IN</em>"</strong></h3>
  </div>

  <h3>A simple component library for <span style="text-decoration: underline;"><strong>Next.js</strong></span> that prioritizes ease-of-use.</h3>
</div>

## Built with
- **React.js 18**
- **Next.js 14**
- **TypeScript**
- **CSS Modules**
- __***Sweat & Tears***__

## Includes
- **Light and Dark theme support with a toggle**
- **Reusable UI components**
- **Full accessibility (ARIA roles, focus management)**
- **Simple theming via CSS variables**
- **Ready-to-run example app**

## Features
- **Button**: Primary and secondary button styles.
- **Navbar**: Responsive header with brand/logo and navigation links.
- **Card**: Simple content container with optional title.
- **Modal**: Accessible modal dialog with backdrop and close functionality.
- **Theme Toggle**: Switch between Light/Dark themes easily.

## Project Structure
### 📁 __ORYN__
&nbsp;&nbsp;&nbsp;&nbsp; └─ 📁 __components__ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **Button.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **Button.module.css** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **Card.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **Card.module.css** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **Modal.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **AdvancedModal.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **Modal.module.css** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **Navbar.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **Navbar.module.css** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **ThemeToggle.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **ThemeToggle.module.css** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **ThemeContext.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **index.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ 📁 __lib__ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **colors.ts** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **genkey.ts** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **svg.ts** <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ 📁 __pages__ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **_app.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **_document.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **index.tsx** <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ 📁 __public__ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ 📁 __assets__ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **oryn-white.svg** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **oryn.svg** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ 📁 __icons__ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ __*.svg__ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ __...__ <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ 📁 __styles__ <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **geist.css** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **globals.css** <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ **reset.css** <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ **.gitignore** <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ **next.config.js** <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ **package-lock.json** <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ **package.json** <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ **README.md** <br />
&nbsp;&nbsp;&nbsp;&nbsp; └─ **tsconfig.json**

## Getting Started

### 1. Install dependencies

```bash
npm install oryn
```

__OR__

```bash
yarn install oryn
```

### 2. Run the development server

```bash
npm run dev
```

__OR__

```bash
yarn dev
```

#### __Then Go To &nbsp; 👉🏻__ &nbsp; __```http://localhost:3000```__

## Usage Example

### In your __Pages__ or __Components__:

```jsx
import {
  Navbar,
  Button,
  Card,
  Modal
} from "../components";

function ExamplePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar
        brand="MyApp"
        links={[{ href: "/about", label: "About" }]}
      />

      <main>
        <Card title="Welcome">
          <p>Hello world!</p>
          <Button onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
        </Card>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Modal Title"
        >
          <p>Modal content here.</p>
        </Modal>
      </main>
    </>
  );
}
```

## Theming

### Light/Dark mode is handled using CSS custom properties.

- **Colors and backgrounds auto-update based on the theme.**
- **The user’s preference is saved in localStorage.**
- **System preferences (prefers-color-scheme) are respected on first load.**

#### To modify colors, __edit styles/globals.css under :root and [data-theme="dark"]__.

## Accessibility

- **Modal uses role="dialog" and aria-modal="true".**
- **Theme toggle has proper aria-label.**
- **Focus management inside the Modal.**
- **Buttons and links are fully keyboard-navigable.**

## Extending Components

### All components are styled with CSS Modules. You can easily extend by:

- **Adding new variants to buttons.**
- **Creating additional components (like Alerts, Badges, etc.).**
- **Adjusting global theme variables.**

## License

#### This project is provided for learning purposes. Use it freely in your projects!

## Inspiration

<h3><span style="font-size: 35px;">"</span>Vercel’s Design Principles and Philosophy of Minimal, Fast, and Accessible Interfaces.<span style="font-size: 35px;">"</span></h3>
<h3 style="font-size: 20px;"><strong><span style="color: #ef0e0e;">Kaycee Ingram</span></strong></h3>