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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl rounded-lg bg-slate-800 shadow-xl p-6">
        <div className="flex justify-between items-center pb-3 border-b border-slate-700">
          <h3 className="text-xl font-bold text-slate-200">{repo} - File Explorer</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="modal-content mt-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-700">
            <p className="text-sm text-slate-400">{currentPath === '' ? '/' : `/${currentPath}`}</p>
            <button
              onClick={goBack}
              disabled={currentPath === '' && !viewingFile}
              className="flex items-center text-sm text-slate-400 hover:text-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
              Back
            </button>
          </div>
          {loading ? (
            <p className="mt-4 text-slate-500">Loading...</p>
          ) : viewingFile ? (
            <pre id="file-content-display" className="mt-2">{viewingFile}</pre>
          ) : contents.length === 0 ? (
            <p className="mt-4 text-slate-500">This directory is empty.</p>
          ) : (
            <ul className="mt-2 space-y-1">
              {contents.map((item) => (
                <li
                  key={item.sha}
                  className="p-2 rounded-md file-item flex items-center gap-2"
                  onClick={() => (item.type === 'dir' ? enterDir(item.path) : openFile(item.path))}
                >
                  {item.type === 'dir' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      <path d="M4 10h12v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
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
      <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="GitHub Projects">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
        </div>
        <div id="repo-list" className="space-y-4">
          {loadingRepos ? (
            <div className="rounded-md border border-slate-800 p-6 transition-all bg-slate-800/20 text-slate-500">
              <p>Loading projects from GitHub...</p>
            </div>
          ) : repos.length === 0 ? (
            <div className="rounded-md border border-slate-800 p-6 bg-slate-800/20 text-slate-500">
              <p>Could not find any public repositories.</p>
            </div>
          ) : (
            repos.map((repo) => (
              <a
                key={repo.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedRepo(repo.name);
                }}
                className="project-card group block rounded-xl border border-slate-800 p-6 shadow-md transition-all hover:bg-slate-800/50 hover:shadow-lg hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                  {repo.name}
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  {repo.description || 'No description provided.'}
                </p>
                <div className="mt-4 flex flex-wrap gap-2" aria-label="Project details">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                    {repo.language || 'N/A'}
                  </div>
                  <div className="flex items-center rounded-full bg-slate-700 px-3 py-1 text-xs font-medium leading-5 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stargazers_count}
                  </div>
                </div>
              </a>
            ))
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
