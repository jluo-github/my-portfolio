Please visit [My portfolio](https://purplecat-portfolio.vercel.app/) for more details.

## Skills and Tools Used

- **Next.js:** Utilized for building server-side rendered React applications.
- **Tailwind CSS:** Used for rapidly styling the user interface with utility classes.

- **React-Type-Animation:** Used for adding animated text effects.
- **Heroicons:** Used for incorporating iconography into the user interface.
- **Framer Motion:** Used for creating animations and adding motion effects.
- **React-Animated-Numbers:** Used for animating numerical values.

- **Resend:** Used for email marketing and communication.

### npm

npm i react-type-animation

### npm

npm i @heroicons/react

### npm

[resend](https://resend.com)
npm install resend

### npm

npm i framer-motion

```
import { motion } from "framer-motion"

export const MyComponent = ({ isVisible }) => (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
)

<motion.div animate={{ x: 0 }} />
```

```
import { useInView } from "framer-motion"

function Component() {
  const ref = useRef(null)
const isInView = useInView(ref, { once: true })

  return <div ref={ref} />
}

useEffect(() => {
  console.log("Element is in view: ", isInView)
}, [isInView])


```

### npm

npm i react-animated-numbers

```
Next JS (< v13.x.x )
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
ssr: false,
});

Next JS (>= v13.x.x )
import AnimatedNumbers from "react-animated-numbers";
```

### npm
