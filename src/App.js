import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Placeholder components
// import Navbar from './Navbar'; // You'll need to create this component
import Home from './Home'; // You'll need to create this component
// import BlogDetails from './BlogDetails'; // You'll need to create this component
// import AddBlog from './AddBlog'; // You'll need to create this component

// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="min-h-screen bg-gray-100">
          {/* Navbar */}
          {/* <Navbar /> */}

          {/* Page Content */}
          <div className="container mx-auto py-8">
            <Routes>
              {/* Home Page */}
              <Route exact path="/" element={<Home />} />

              {/* Add Blog Page */}
              {/* <Route exact path="/blogs/add" element={<AddBlog />} /> */}

              {/* Blog Details Page */}
              {/* <Route path="/blogs/:id" element={<BlogDetails />} /> */}
            </Routes>
          </div>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;