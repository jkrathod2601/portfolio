import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const GITHUB_USERNAME = 'jkrathod2601';

function FileExplorerModal({ repo, onClose }) {
  const [contents, setContents] = useState([]);
  const [currentPath, setCurrentPath] = useState('');
  const [pathHistory, setPathHistory] = useState([]);
  const [viewingFile, setViewingFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (repo) fetchContents('');
  }, [repo]);

  async function fetchContents(path) {
    setLoading(true);
    setViewingFile(null);
    try {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/contents/${path}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        data.sort((a, b) => {
          if (a.type === 'dir' && b.type !== 'dir') return -1;
          if (a.type !== 'dir' && b.type === 'dir') return 1;
          return a.name.localeCompare(b.name);
        });
        setContents(data);
      } else {
        setContents([]);
      }
    } catch {
      setContents([]);
    }
    setLoading(false);
  }

  async function openFile(filePath) {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/contents/${filePath}`, {
        headers: { Accept: 'application/vnd.github.v3.raw' },
      });
      if (res.ok) {
        setViewingFile(await res.text());
      } else {
        setViewingFile('Error: Could not retrieve file content.');
      }
    } catch {
      setViewingFile('An error occurred while fetching the file.');
    }
    setLoading(false);
  }

  function enterDir(path) {
    setPathHistory((prev) => [...prev, currentPath]);
    setCurrentPath(path);
    fetchContents(path);
  }

  function goBack() {
    if (viewingFile) {
      setViewingFile(null);
      return;
    }
    if (pathHistory.length > 0) {
      const prev = pathHistory[pathHistory.length - 1];
      setPathHistory((prevHistory) => prevHistory.slice(0, -1));
      setCurrentPath(prev);
      fetchContents(prev);
    }
  }

  if (!repo) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-2xl rounded-[24px] bg-white dark:bg-[#222] shadow-xl p-6">
        <div className="flex justify-between items-center pb-3 border-b border-hairline">
          <h3 className="text-headline">{repo}</h3>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center hover:bg-hairline transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="modal-content mt-4">
          <div className="flex justify-between items-center pb-2 border-b border-hairline-soft">
            <p className="text-body-sm text-ink/40">{currentPath === '' ? '/' : `/${currentPath}`}</p>
            <button
              onClick={goBack}
              disabled={currentPath === '' && !viewingFile}
              className="text-body-sm text-ink/40 hover:text-ink transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              &larr; Back
            </button>
          </div>
          {loading ? (
            <p className="mt-4 text-body-sm text-ink/40">Loading...</p>
          ) : viewingFile ? (
            <pre id="file-content-display" className="mt-2">{viewingFile}</pre>
          ) : contents.length === 0 ? (
            <p className="mt-4 text-body-sm text-ink/40">This directory is empty.</p>
          ) : (
            <ul className="mt-2 space-y-1">
              {contents.map((item) => (
                <li
                  key={item.sha}
                  className="file-item p-2 rounded-md flex items-center gap-2 text-body-sm"
                  onClick={() => (item.type === 'dir' ? enterDir(item.path) : openFile(item.path))}
                >
                  {item.type === 'dir' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ink/40 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      <path d="M4 10h12v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ink/40 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2h4l4 4v8H6V6z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        else setRepos([]);
      })
      .catch(() => setRepos([]))
      .finally(() => setLoadingRepos(false));
  }, []);

  useEffect(() => {
    if (selectedRepo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedRepo]);

  return (
    <>
      <section id="projects" className="py-section px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-eyebrow uppercase text-ink/40 mb-4">
            Projects
          </p>
          {loadingRepos ? (
            <div className="rounded-[24px] bg-surface-soft p-12 text-center text-body-sm text-ink/40">
              Loading projects from GitHub...
            </div>
          ) : repos.length === 0 ? (
            <div className="rounded-[24px] bg-surface-soft p-12 text-center text-body-sm text-ink/40">
              No public repositories found.
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  onClick={() => setSelectedRepo(repo.name)}
                  className="group inline-flex items-center gap-2 rounded-pill bg-white dark:bg-surface-soft px-4 py-2 border border-hairline hover:shadow-sm transition-all cursor-pointer"
                >
                  <img
                    src="https://cdn.simpleicons.org/github"
                    alt=""
                    className="h-4 w-4 shrink-0"
                    loading="lazy"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  <span className="text-body-sm font-medium truncate max-w-[140px] group-hover:opacity-70 transition-opacity">
                    {repo.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {selectedRepo && (
        <FileExplorerModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
      )}
    </>
  );
}

export default Projects;
