import { useState, useEffect } from 'react';

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

  return (
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
    </div>
  );
}

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        else setRepos([]);
      })
      .catch(() => setRepos([]))
      .finally(() => setLoadingRepos(false));
  }, []);

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
            <div className="space-y-3">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedRepo(repo.name);
                  }}
                  className="group flex items-center justify-between bg-white dark:bg-surface-soft rounded-pill px-6 py-4 border border-hairline hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ink" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.165 6.839 9.48.5.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.159-1.11-1.465-1.11-1.465-.908-.618.069-.606.069-.606 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.906.832.09-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.398.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.843-2.339 4.687-4.566 4.935.359.308.678.915.678 1.846 0 1.334-.012 2.41-.012 2.73 0 .268.18.579.688.482C20.137 20.165 23 16.419 23 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-link group-hover:opacity-70 transition-opacity truncate">
                        {repo.name}
                      </h3>
                      <p className="text-body-sm text-ink/50 truncate">
                        {repo.description || 'No description provided.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0 ml-4">
                    <span className="rounded-pill bg-surface-soft text-body-sm text-ink/60 px-3 py-1 hidden sm:block">
                      {repo.language || 'N/A'}
                    </span>
                    <span className="flex items-center gap-1 text-body-sm text-ink/40">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ink/20 group-hover:text-ink/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
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
