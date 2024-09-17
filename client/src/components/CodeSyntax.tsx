import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeSyntax() {

   const codeString = `type ReduceItems<Arr extends ReadonlyArray<any>, Result extends any[] = []> = 
   Arr extends [] 
   ? Result 
   : Arr extends [infer H] 
      ? H extends {items: ReadonlyArray<MenuItem>} 
         ? [...Result, ...H["items"]] 
         : never 
      : Arr extends readonly [infer H, ...infer Tail] 
         ? Tail extends ReadonlyArray<any> 
            ? H extends {items: ReadonlyArray<MenuItem>} 
               ? ReduceItems<Tail, [...Result, ...H["items"]]> 
               : never 
            : never 
         : never;`

   return (
      <div className="mt-4">
         <SyntaxHighlighter language="typescript" style={atomDark}>
            {codeString}
         </SyntaxHighlighter>
      </div>
   )
}