//import AnimatedCursor from "react-animated-cursor"
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Cursor() {
  return (
   <AnimatedCursor 
   innerSize={18} //main cursor size
   outerSize={36}
      color='193, 11, 111'
      outerAlpha={0.2} //secondary cursor opacity
      innerScale={0.7} // main scale on hover
      outerScale={2} //secondary scale on hover:
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
       // 'button',
       // '.link',
        'Link',
        'h3'
      ]}
   />
  )
}
