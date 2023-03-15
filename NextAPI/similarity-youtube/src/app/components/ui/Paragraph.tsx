import { FC,forwardRef,HTMLAttributes } from "react";
import {cva,VariantProps} from "class-variance-authority"

interface ParagraphProps{}

const paragraphVariants = cva("max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
{
    variants:{
        size:{
            default:"text-base sm:text-lg",
            sm:"text-sm sm:text-base",
        }
    },

    defaultVariants:{
        size:'default',
    }
})



interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>,VariantProps<typeof paragraphVariants>{}

const Paragraph = forwardRef<HTMLParagraphElement,ParagraphProps>(({
    className,size,children, ...props
},ref)=>{
    return <p ref={ref} {...props} className={}</p>
}
)

export default Paragraph
