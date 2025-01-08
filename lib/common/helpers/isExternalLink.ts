export const isExternalLink = (path: string): boolean => {
    let operation = false
    let url

    try {
        url = new URL(path)
        window.open(url, '_blank', 'noopener')
        operation = true
    } catch (_) {
        operation = false
    }

    return operation
}
