import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renderiza o markdown dos enunciados (texto, imagens, tabelas) com os
 * estilos de .question-content definidos em globals.css.
 */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="question-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
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
