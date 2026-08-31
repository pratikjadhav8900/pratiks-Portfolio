# Pratik Jadhav — Portfolio

A bold, animated Next.js portfolio starter with a React Three Fiber character stage. It currently includes a lightweight procedural 3D dancing character so the site works immediately.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add the real 3D Pratik

Put the final rigged/animated GLB here:

`public/models/pratik.glb`

The site already loads that path. Until the model is available, the hero uses a lightweight procedural 3D fallback.

## Important next step

The current `Pratik3D.tsx` provides an immediately working procedural 3D dancer. The next milestone is replacing that placeholder with the final 3D Pratik model and real dance animation clips.

Recommended production assets:
- `pratik.glb` — optimized character
- `pratik-dance.glb` — dance animation, if separate
- `pratik-idle.glb` — idle animation, if separate
- compressed textures / reasonable polygon count for fast loading

## Customize

Main page content: `components/Portfolio.tsx`
Visual styling: `components/portfolio.css`
3D stage: `components/Pratik3D.tsx`

To keep the hero styling isolated, import `portfolio.css` from `components/Portfolio.tsx`.
