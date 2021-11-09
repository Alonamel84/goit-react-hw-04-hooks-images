import './App.css';
import './styles/styles.css';
import Loader from './components/Loader';
import Searchbar from './components/Searchbar';
import LoaderIcon from './components/Loader/LoaderIcon';
import ImageGallery from './components/ImageGallery';
import { getImages } from './api/api';
import { useEffect, useState } from 'react';

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('all');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getGallery();
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setHits([]);
  };

  const getGallery = () => {
    setLoading(true);
    getImages(query, page)
      .then(hits => {
        setHits(prev => {
          return [...prev, ...hits];
        });
      })

      .catch(err => err)
      .finally(() => {
        if (page >= 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
        setLoading(false);
      });
  };

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery hits={hits} />
      {isLoading && <LoaderIcon />}
      {!!hits.length && hits !== [] && <Loader onClick={handleChangePage} onChange={getGallery} />}
    </div>
  );
};

export default App;
