# Orbit One: Responsive Product Landing Page

A responsive landing page for **Orbit One**, a fictional smartwatch. Built as the Week 02 Minor Project for the Web Development course to practise CSS3, Flexbox, CSS Grid, responsive design and Tailwind CSS.

## Idea

The page follows a day. It fits the product's pitch: a watch that keeps your day in sync.

The watch in the hero is not an image. It is drawn in SVG and its hands show the visitor's real time, moved by a few lines of JavaScript.

## Sections

1. **Navigation bar**: logo, links, a Buy Now button and a hamburger menu on mobile
2. **Hero**: product title, description, Buy Now and Learn More buttons, and the live SVG watch
3. **Features**: five features shown as a timeline of a day, each with a small watch-screen readout
4. **Benefits**: how the product helps, plus warranty, shipping and returns
5. **Testimonials**: three reviews written as a group chat
6. **Pricing and call to action**: three plans (Lite, One, Pro) and a closing call-to-action
7. **Footer**: contact details, social links and copyright

## Concepts used

| Concept | Where |
| --- | --- |
| **CSS Grid** | Hero layout, the features timeline rows, benefits layout, pricing plans, footer columns |
| **Flexbox** | Navbar, button groups, chat messages, closing call-to-action |
| **Responsive design** | Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`), mobile menu, rows that restack on small screens |
| **Tailwind CSS** | Spacing, colours, typography and layout, with a custom colour theme and fonts set in the page |
| **CSS3** | `css/style.css`: frosted navbar, button transitions, star-field background made from radial gradients, keyframe animation, `prefers-reduced-motion` support |
| **JavaScript** | Mobile menu toggle, live watch hands, footer year |

## Design notes

- **Palette** (named after the time of day): dawn `#FFD3BE`, day `#CFE8F7`, noon `#FFEAB0`, dusk `#DCCBF3`, night `#1F2350`, with coral `#FF6F59` as the one accent colour. Night indigo is also used for text.
- **Fonts**: Bricolage Grotesque for everything, and Caveat for one handwritten note in the hero. Both load from Google Fonts.
- **Layout**: the page uses different layouts for different content (a timeline, a two-column text layout, a chat, pricing columns) instead of one repeated card.

## Responsive behaviour

- **Mobile (below 768px)**: single column, hamburger menu, each timeline row stacks its readout under the text
- **Tablet (768px and up)**: full navbar, two-column hero, timeline rows show time, text and readout side by side
- **Desktop (1024px and up)**: wider timeline, two-column benefits, three pricing plans side by side with the middle one raised

## Project structure

```
orbit-landing-page/
├── index.html      # page markup and Tailwind classes
├── css/
│   └── style.css   # custom CSS3 (buttons, star field, animation)
├── js/
│   └── main.js     # mobile menu, live watch hands, footer year
└── README.md
```

## Notes

- Tailwind is loaded through its CDN, which keeps the project simple and needs no build step. An internet connection is needed for Tailwind and Google Fonts.
- The product, reviews, prices and contact details are made up for learning purposes.
- The footer social links and plan buttons point to `#` as placeholders.

## Author

Made by Sharanya Patake Manjunath as part of the Web Development course, Week 02.
