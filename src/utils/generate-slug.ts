export function slugify(text: string): string {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/-{2,}/g, '-') // Remove múltiplos hífens seguidos
        .replace(/^-+|-+$/g, ''); // Remove hífens do início e fim
}