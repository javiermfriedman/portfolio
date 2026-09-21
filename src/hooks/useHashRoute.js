import { useEffect, useState } from 'react'

export const PAGES = ['about', 'projects', 'experience']
const DEFAULT_PAGE = 'about'

/** Parse "#/projects" → "projects". Empty or unknown hashes fall back to About. */
export function pageFromHash(hash = window.location.hash) {
  const id = hash.replace(/^#\/?/, '').toLowerCase()
  return PAGES.includes(id) ? id : DEFAULT_PAGE
}

/** True when the URL points at a specific page (a deep link) rather than the bare root. */
export function hasDeepLink() {
  return window.location.hash.replace(/^#\/?/, '') !== ''
}

/** Current page id, kept in sync with the URL hash. Navigation happens via <a href="#/page">. */
export default function useHashRoute() {
  const [page, setPage] = useState(() => pageFromHash())

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return page
}
