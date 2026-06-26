import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/**
 * Renderiza markdown com os estilos de .question-content (texto, imagens,
 * tabelas) definidos em globals.css.
 *
 * `math`: ativa LaTeX ($...$ e $$...$$) via remark-math + KaTeX. Fica DESLIGADO
 * por padrão porque o enunciado das questões usa "R$" (cifrão) em valores, que
 * seria interpretado como fórmula. Use `math` apenas em conteúdo controlado
 * (ex.: dicas), onde valores em dinheiro vêm escapados como "R\$".
 */
export function Markdown({
  children,
  math = false,
  className = "question-content",
}: {
  children: string;
  math?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={math ? [remarkGfm, remarkMath] : [remarkGfm]}
        rehypePlugins={math ? [[rehypeKatex, { strict: "ignore", throwOnError: false }]] : []}
        components={{
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={typeof src === "string" ? src : undefined}
              alt={alt ?? "Imagem da questão"}
              loading="lazy"
            />
          ),
          a: ({ children: linkChildren }) => <span>{linkChildren}</span>,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
