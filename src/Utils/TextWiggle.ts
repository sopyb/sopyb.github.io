export function processCelesteWiggle(html: string): string {
  return html.replace(
    /<span class=['"]celeste-textwiggle['"]>([^<]*)<\/span>/g,
    (_, text) => {
      const chars = text.split('').map((char: string, i: number) => {
        if (char === ' ') {
          return '<span>&nbsp;</span>';
        }
        const delay = (i * -0.05).toFixed(2);
        return `<span style="animation-delay: ${delay}s">${char}</span>`;
      }).join('');
      return `<span class="celeste-textwiggle">${chars}</span>`;
    }
  );
}
